import { Labels } from "../../hooks/labels";
import { IPhoto } from "../../store/photos";
import "./print-edit.css";

export const PrintEdit = ({
	labels,
	photo,
	onClose,
}: {
	labels: Labels<"Label.PrintsEdit.Back">;
	photo: IPhoto;
	onClose: () => void;
}) => {
	return (
		<>
			<button onClick={() => { onClose(); }}>{labels["Label.PrintsEdit.Back"]}</button>
			<div className="print-edit">
				<img src={photo.url} alt={photo.fileName} />
			</div>
		</>
	);
};
PrintEdit.displayName = "PrintEdit";
