import {Suspense, useEffect, useState} from 'react';
import css from './App.module.scss';
import {Outlet} from "react-router-dom";

export const App = ()  => {
	const [count, setCount] = useState<number>(0);

	// if (__PLATFORM__ === 'desktop') {
	// 	return (
	// 		<div>
	// 			isDesktop
	// 		</div>
	// 	)
	// }
	//
	// if (__PLATFORM__ === 'mobile') {
	// 	return (
	// 		<div>
	// 			isMobile
	// 		</div>
	// 	)
	// }

	console.log(1)

	useEffect(() => {
		console.log(2)

		return () => {
			console.log(3)
		}
	}, []);

	return (
		<div>
			<h1>{count}</h1>
			<button
				className={css.button}
				onClick={() => setCount((value) => value + 1)}
			>
				+++ asdas
			</button>

			<h2>PLATFORM={__PLATFORM__}</h2>

			<Suspense>
				<Outlet/>
			</Suspense>
		</div>
	);
};