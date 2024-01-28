export type BuildPaths = Record<'entry' | 'output' | 'html', string>

export type BuildMode = 'production' | 'development';

export interface BuildOptions {
	port: number;
	mode: BuildMode;
	paths: BuildPaths
}