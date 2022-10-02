import React from "react";

import "./header.css";

export const Header = ({ children }: React.PropsWithChildren) => (
	<header className="header">
		{ children }
	</header>
);
Header.displayName = "Header";

export const HeaderLeft = ({ children }: React.PropsWithChildren) => (
	<div className="header__left">
		{children}
	</div>
);

export const HeaderRight = ({ children }: React.PropsWithChildren) => (
	<div className="header__right">
		{children}
	</div>
);
