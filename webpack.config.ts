import path from 'path';
import { type Configuration } from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode, BuildOptions, BuildPaths, BuildPlatform} from "./config/build/types";

interface IEnvVariables {
	port: number;
	mode: BuildMode;
	paths: BuildPaths;
	analyzer?: string;
	platform: BuildPlatform
}

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html'),
	src: path.resolve(__dirname, 'src'),
	public: path.resolve(__dirname, 'public')
}

export default (
	{
		port = 3000,
		mode = 'development',
		analyzer,
		platform = 'desktop'
	}: IEnvVariables
): Configuration => {
	const buildConfig = buildWebpack({
		port,
		mode,
		paths,
		analyzer: analyzer === 'true',
		platform
	});

	return buildConfig
};