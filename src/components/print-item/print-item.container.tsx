import { PrintItem } from "./print-item";
import "./print-item.css";
import { useLabels } from "../../hooks/labels";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../hooks/store";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const print = useStore((s) => s.prints[printId]);
	const photo = useStore((s) => s.photos[print.photoId]);
	const setPrint = useStore((s) => s.setPrint);
	const [labels] = useLabels(["Label.Quantity"]);
	const navigate = useNavigate();

	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			labels={labels}
			onSetQuantity={(quantity) => setPrint(printId, prev => ({ ...prev, quantity }))}
			onEditClicked={() => { navigate(`/edit/${print.printId}`); }}
		/>
	);
};
PrintItem.displayName = "PrintItem";
