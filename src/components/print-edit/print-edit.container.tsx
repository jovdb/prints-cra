import { useParams, useNavigate } from "react-router-dom"; 
import { PrintEdit } from "./print-edit";
import { useLabels } from "../../hooks/labels";
import { usePrint } from "../../hooks/prints";
import { usePhoto } from "../../hooks/photos";

export const PrintEditContainer = () => {
	const{ id: editingPrintId } = useParams();
	const navigate = useNavigate();
	const print = usePrint(editingPrintId);
	const photo = usePhoto(print?.photoId);
	const [labels] = useLabels(["Label.PrintsEdit.Back"]);
	if (!editingPrintId || !print || !photo) return null;

	return (
		<PrintEdit
			labels={labels}
			photo={photo}
			onClose={() => { navigate(-1); }}
		/>
	);
};
PrintEditContainer.displayName = "PrintEditContainer";
