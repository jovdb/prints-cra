import { usePrints } from "../../hooks/prints";
import { PrintItem } from "../print-item";

export const Prints = () => {
	const prints = usePrints();

	return (
		<>
			{Object.keys(prints).map((printId) => {
				return (
					<PrintItem
						key={printId}
						printId={printId}
					/>
				);
			})}
		</>
	);
};
Prints.displayName = "Prints";
