import { usePhoto } from "../../hooks/photos";
import { usePrint } from "../../hooks/prints";
import { useEditingPrintId } from "../../hooks/app";
import { PrintEdit } from "./print-edit";

export const PrintEditContainer = () => {
	const [editingPrintId, setEditingPrintId] = useEditingPrintId();
	const [print] = usePrint(editingPrintId);
	const [photo] = usePhoto(print?.photoId);
	
	if (!editingPrintId || !print || !photo) return null;

	return (
		<PrintEdit
			photo={photo}
			onClose={() => { setEditingPrintId(undefined); }}
		/>
	);
};
PrintEditContainer.displayName = "PrintEditContainer";
