import { Labels } from "../../hooks/labels";
import { IPhoto } from "../../store/photos";
import { IPrint } from "../../store/prints";
import "./print-item.css";

export const PrintItem = ({
	print,
	photo,
	labels,
	onSetQuantity,
	onEditClicked,
}: {
	print: IPrint;
	photo: IPhoto;
	labels: Labels<"Label.Quantity">;
	onSetQuantity: (quantity: number) => void;
	onEditClicked: () => void;
}) => {
	return (
		<div className="print-item">
			<div className="print-item__img">
				<img
					loading="lazy"
					onClick={(e) => { onEditClicked(); e.preventDefault(); }}
					src={photo?.url}
					alt={photo.fileName}
				/>
			</div>
			<div className="print-item__side">
				<label htmlFor={"quantity_" + print.printId} >{ labels["Label.Quantity"] }: </label>
				<input
					id={"quantity_" + print.printId}
					type="number"
					value={print.quantity}
					min="1"
					max="999"
					onChange={(e) => {
						onSetQuantity(parseInt(e.target.value, 10));
					}}
				/>
			</div>
		</div>
	);
};
PrintItem.displayName = "PrintItem";
