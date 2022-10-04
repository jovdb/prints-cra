import { useStore } from "../../hooks/store";
import { PrintItem } from "../print-item";

export const PrintsList = () => {
	const prints = useStore(s => s.prints);
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
PrintsList.displayName = "Prints";
