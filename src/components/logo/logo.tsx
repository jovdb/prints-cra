import "./logo.css";
import logo from './logo.svg'; // Tell webpack this JS file uses this image

export const Logo = () => (
	<div className="logo">
		<img src={logo} alt="Logo"/>
	</div>
);
