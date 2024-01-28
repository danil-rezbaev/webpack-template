import {useState} from 'react';
import css from './App.module.scss';

export const App = () => {
	const [count, setCount] = useState<number>(0);

	return (
		<div>
			<h1>{count}</h1>
			<button
				className={css.button}
				onClick={() => setCount((value) => value + 1)}
			>
				increase
			</button>
		</div>
	);
};