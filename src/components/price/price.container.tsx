import { Price } from "./price";
import { usePrints } from "../../hooks/prints";
import { getTotalPrice } from "../../store/prints";

export const PriceContainer = () => {
	const [prints] = usePrints();
	const price = getTotalPrice(prints);

	return (
		<Price value={price + "€"} />
	);
};
PriceContainer.displayName = "PriceContainer";

