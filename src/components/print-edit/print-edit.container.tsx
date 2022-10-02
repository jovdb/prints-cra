import { usePhoto } from "../../hooks/photos";
import { usePrint } from "../../hooks/prints";
import { useEditingPrintId } from "../../hooks/app";
import { PrintEdit } from "./print-edit";
import { useLabels } from "../../hooks/labels";

export const PrintEditContainer = () => {
	const [editingPrintId, setEditingPrintId] = useEditingPrintId();
	const [print] = usePrint(editingPrintId);
	const [photo] = usePhoto(print?.photoId);
	const [labels] = useLabels(["Label.PrintsEdit.Back"]);
	if (!editingPrintId || !print || !photo) return null;

	return (
		<PrintEdit
			labels={labels}
			photo={photo}
			onClose={() => { setEditingPrintId(undefined); }}
		/>
	);
};
PrintEditContainer.displayName = "PrintEditContainer";
