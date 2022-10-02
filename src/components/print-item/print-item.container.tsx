import { usePhoto } from "../../hooks/photos";
import { usePrint } from "../../hooks/prints";
import { PrintItem } from "./print-item";
import "./print-item.css";
import { useLabels } from "../../hooks/labels";
import { useNavigate } from "react-router-dom";

export const PrintItemContainer = ({
	printId,
}: {
	printId: string;
}) => {
	const [print, setPrint] = usePrint(printId);
	const [photo] = usePhoto(print?.photoId);
	const [labels] = useLabels(["Label.Quantity"]);
	const navigate = useNavigate();

	if (!print || !photo) return null;

	return (
		<PrintItem
			key={print.printId}
			photo={photo}
			print={print}
			labels={labels}
			onSetQuantity={(quantity) => setPrint(prev => ({ ...prev, quantity }))}
			onEditClicked={() => { navigate(`/edit/${print.printId}`); }}
		/>
	);
};
PrintItem.displayName = "PrintItem";
