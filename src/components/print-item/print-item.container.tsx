import { usePhoto } from "../../hooks/photos";
import { usePrint } from "../../hooks/prints";
import { useEditingPrintId } from "../../hooks/app";
import { PrintItem } from "./print-item";
import "./print-item.css";
import { useLabels } from "../../hooks/labels";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const [print, setPrint] = usePrint(printId);
	const [photo] = usePhoto(print?.photoId);
	const [, setEditingPrintId] = useEditingPrintId();
	const [labels] = useLabels(["Label.Quantity"]);

	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			labels={labels}
			onSetQuantity={(quantity) => setPrint(prev => ({ ...prev, quantity }))}
			onEditClicked={() => setEditingPrintId(print.printId) }
		/>
	);
};
PrintItem.displayName = "PrintItem";
