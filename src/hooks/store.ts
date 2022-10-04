import create from "zustand";
import { store } from "../store/prints";

export const useStore = create(store);

export function useInit() {
	return useStore(s => s.setStore);
}

export function usePrint(printId: string | undefined) {
	return useStore((s) => printId ? s.prints[printId] : undefined);
}

export function usePhoto(phototId: string | undefined) {
	return useStore((s) => phototId ? s.photos[phototId] : undefined);
}
