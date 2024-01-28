import path from 'path';
import { type Configuration } from 'webpack';
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildPaths} from "./config/build/types";

type Mode = 'production' | 'development';

interface IEnv {
	mode: Mode;
	port: number;
}

const paths: BuildPaths = {
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	output: path.resolve(__dirname, 'build'),
	html: path.resolve(__dirname, 'public', 'index.html')
}

export default ({port = 3000, mode = 'development'}: IEnv): Configuration => {
	const buildConfig = buildWebpack({
		port,
		mode,
		paths
	});

	return buildConfig
};