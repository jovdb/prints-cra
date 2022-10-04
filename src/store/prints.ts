import create from "zustand/vanilla";

import type { IPrint, Photos, Prints } from "../types";

export interface IStore {
	prints: Prints;
	photos: Photos;
	setPrint(printId: string, updater: (print: IPrint) => IPrint): void;
	setStore(updater: (prev: IStore) => Pick<IStore, "photos" | "prints">): void;
	getTotalPrice(): number;
}

export let store = create<IStore>(
	(set, get) => ({
		prints: {},
		photos: {},

		setStore(updater: (prev: IStore) => Pick<IStore, "photos" | "prints">) {
			const currentValue= get();
			const newValue = updater(currentValue);
			if (currentValue === newValue) return;

			set({
				prints: newValue.prints,
				photos: newValue.photos,
			}, false);
		},

		setPrint(printId: string, updater: (print: IPrint) => IPrint) {
			const print = get().prints[printId];
			const newPrint = updater(print);
			if (print === newPrint) return;

			set((prevState) => ({
				...prevState,
				prints: {
					...prevState.prints,
					[printId]: newPrint,
				},
			}), true);
		},

		getTotalPrice() {
			const state = get();
			return Object
				.values(state.prints)
				.reduce((prev, print) => prev + print.quantity * 0.5, 0);
		},
	})
);
