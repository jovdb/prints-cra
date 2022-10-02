import { useTotalPrice } from "../../hooks/prints";
import { Price } from "./price";

export const PriceContainer = () => {
	const price = useTotalPrice();
	return (
		<Price value={price + "€"} />
	);
};
PriceContainer.displayName = "PriceContainer";

