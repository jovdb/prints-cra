import "./price.css";

export const Price = ({ value }: { value: string }) => (
	<span className="price">
		{value}
	</span>
);
Price.displayName = "Price";
