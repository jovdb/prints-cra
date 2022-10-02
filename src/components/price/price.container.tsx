import { Price } from "./price";
import { useAtom } from "jotai";
import { totalPriceAtom } from "../../store/prints";

export const PriceContainer = () => {
	const [price] = useAtom(totalPriceAtom);
	return (
		<Price value={price + "€"} />
	);
};
PriceContainer.displayName = "PriceContainer";

