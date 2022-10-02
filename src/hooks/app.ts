import { useAtom } from "jotai";
import { editingPrintAtom } from "../store/app";

export function useEditingPrintId() {
	return useAtom(editingPrintAtom);
}
