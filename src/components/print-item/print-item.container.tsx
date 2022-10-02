import { usePhoto } from "../../store/photos";
import { usePrint } from "../../store/prints";
import { PrintItem } from "./print-item";
import "./print-item.css";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const [print, setPrint] = usePrint(printId);
	const [photo] = usePhoto(print?.photoId);
	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			onSetQuantity={(quantity) => setPrint(prev => ({ ...prev, quantity }))}
			onEditClicked={() => alert("edit")}
		/>
	);
};
PrintItem.displayName = "PrintItem";
