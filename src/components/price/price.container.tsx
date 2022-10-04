import { Price } from "./price";
import { useStore } from "../../hooks/store";

export const PriceContainer = () => {
	const price = useStore((s) => s.getTotalPrice());

	return (
		<Price value={price + "€"} />
	);
};
PriceContainer.displayName = "PriceContainer";

