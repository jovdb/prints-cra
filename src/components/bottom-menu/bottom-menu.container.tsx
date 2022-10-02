import { useEditingPrintId } from "../../hooks/app";
import "./bottom-menu.css";

export const BottomMenuContainer = () => {
	const editingPrintId = useEditingPrintId();

	if (editingPrintId) {
		return (
			<div className="bottom-menu">
				<button>
					Format
				</button>
				<button>
					Transform
				</button>
			</div>
		);
	}

	return (
		<div className="bottom-menu">
			<button>
				Add foto&apos;s
			</button>
		</div>
	);
};