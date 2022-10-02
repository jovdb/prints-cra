import { usePhoto } from "../../store/photos";
import { usePrint } from "../../store/prints";
import { useEditingPrintId } from "../../store/prints-edit";
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
