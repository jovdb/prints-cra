import { usePhoto } from "../../store/photos";
import { usePrint } from "../../store/prints";
import { useEditingPrintId } from "../../store/prints-edit";
import { PrintItem } from "./print-item";
import "./print-item.css";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const [print, setPrint] = usePrint(printId);
	const [photo] = usePhoto(print?.photoId);
	const [, setEditingPrintId] = useEditingPrintId();
	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			onSetQuantity={(quantity) => setPrint(prev => ({ ...prev, quantity }))}
			onEditClicked={() => setEditingPrintId(print.printId) }
		/>
	);
};
PrintItem.displayName = "PrintItem";
