import { atom, useAtom } from "jotai";

export const editingPrintAtom = atom<string |undefined>(undefined);

export function useEditingPrintId() {
	return useAtom(editingPrintAtom);
}
