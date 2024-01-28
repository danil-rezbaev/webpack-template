import {Configuration} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
	const isDev = options.mode === 'development';
	const isProd = options.mode === 'production';

	const commonPlugins = [
		new HtmlWebpackPlugin({
			template: options.paths.html
		})
	]

	if (isDev) {
		return [
			...commonPlugins
		]
	}

	if (isProd) {
		return [
			...commonPlugins,
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			})
		]
	}
}