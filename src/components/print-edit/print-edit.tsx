import { IPhoto } from "../../store/photos";
import "./print-edit.css";

export const PrintEdit = ({
	photo,
	onClose,
}: {
	photo: IPhoto;
	onClose: () => void;
}) => {
	return (
		<>
			<button onClick={() => { onClose(); }}>BACK</button>
			<div className="print-edit">
				<img src={photo.url} alt={photo.fileName} />
			</div>
		</>
	);
};
PrintEdit.displayName = "PrintEdit";
