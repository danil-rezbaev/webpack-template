import {Configuration, DefinePlugin} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types";
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export function buildPlugins({mode, paths, analyzer, platform}: BuildOptions): Configuration['plugins'] {
	const isDev = mode === 'development';
	const isProd = mode === 'production';

	const commonPlugins = [
		new HtmlWebpackPlugin({
			template: paths.html,
			favicon: path.resolve(paths.public, 'favicon.ico')
		}),
		new DefinePlugin({
			__PLATFORM__: JSON.stringify(platform)
		}),
	]

	if (isDev) {
		return [
			...commonPlugins,
			// Выносит проверку в отдельный процесс не нагружая сборку
			new ReactRefreshWebpackPlugin(),
			new ForkTsCheckerWebpackPlugin(),
		]
	}


	if (isProd) {
		return [
			...commonPlugins,
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash:8].css',
				chunkFilename: 'css/[name].[contenthash:8].css',
			}),
			new CopyPlugin({
				patterns: [
					{ 
						from: path.resolve(paths.public, 'static'),
						to: path.resolve(paths.output, 'static')
					},
				],
			}),
			analyzer && new BundleAnalyzerPlugin()
		].filter(Boolean)
	}
}