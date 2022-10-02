import { PropsWithChildren } from "react";
import "./bottom-menu.css";

export function BottomMenu({ children }: PropsWithChildren) {
	return (
		<div className="bottom-menu">
			{children}
		</div>
	);
}

export function BottomMenuButton({ children }: PropsWithChildren) {
	return (
		<button className="bottom-menu__button">
			{children}
		</button>
	);
}
