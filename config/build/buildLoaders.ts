import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";
import ReactRefreshTypescript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
	const isDev = options.mode === 'development';

	const sassLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			// Creates `style` nodes from JS strings
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			// Translates CSS into CommonJS
			{
				loader: "css-loader",
				options: {
					modules: {
						localIdentName: isDev
							? '[path][name]__[local]--[hash:base64:5]'
							: '[hash:base64:8]'
					}
				},
			},
			// Compiles Sass to CSS
			"sass-loader",
		],
	};

	const tsLoader = {
		test: /\.tsx?$/,
		loader: 'ts-loader',
		exclude: /node_modules/,
		options: {
			transpileOnly: true,
			getCustomTransformers: () => ({
				before: [isDev && ReactRefreshTypescript()].filter(Boolean)
			})
		}
	}

	const assetsLoader = {
		test: /\.(png|jpg|jpeg|gif)$/i,
		type: 'asset/resource',
	}

	const svgLoader = {
		test: /\.svg$/,
		use: [
			{
				loader: '@svgr/webpack',
				options: {
					icon: true,
					svgoConfig: {
						plugins: [
							{
								name: 'convertColors',
								params: {
									currentColor: true
								}
							}
						]
					}
				}
			}
		],
	}

	return [
		sassLoader,
		tsLoader,
		svgLoader,
		assetsLoader,
	]
}