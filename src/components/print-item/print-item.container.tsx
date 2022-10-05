import { PrintItem } from "./print-item";
import "./print-item.css";
import { useLabels } from "../../hooks/labels";
import { useNavigate } from "react-router-dom";
import { usePrint, usePrintsActions } from "../../hooks/prints";
import { usePhoto } from "../../hooks/photos";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const print = usePrint(printId);
	const photo = usePhoto(print?.photoId);
	const { updatePrint } = usePrintsActions();

	const [labels] = useLabels(["Label.Quantity"]);
	const navigate = useNavigate();

	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			labels={labels}
			onSetQuantity={(quantity) => updatePrint(printId, { ...print, quantity })}
			onEditClicked={() => { navigate(`/edit/${print.printId}`); }}
		/>
	);
};
PrintItem.displayName = "PrintItem";
