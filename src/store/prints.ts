import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export type PrintFormat = "15" | "18";

export interface IPrint {
	printId: string;
	photoId: string;
	quantity: number;
	format: PrintFormat;
}

export type Prints = Record<string, IPrint>;

const defaultPrints: Prints = {
	"1": {
		printId: "1",
		photoId: "1",
		quantity: 1,
		format: "15",
	},
	"2": {
		printId: "2",
		photoId: "2",
		quantity: 2,
		format: "18",
	},
	"3": {
		printId: "3",
		photoId: "2",
		quantity: 1,
		format: "15",
	},
	"4": {
		printId: "4",
		photoId: "3",
		quantity: 1,
		format: "15",
	},
	"5": {
		printId: "5",
		photoId: "4",
		quantity: 1,
		format: "15",
	},
	"6": {
		printId: "6",
		photoId: "5",
		quantity: 1,
		format: "15",
	},
};

export const printsAtom = atom<Prints>(defaultPrints);

export const totalPriceAtom = atom(
  (get) => {
		const prints = get(printsAtom);
		return Object
			.values(prints)
			.reduce((prev, print) => prev + print.quantity * 0.5, 0);
	}
)

export function usePrints() {
	const [prints] = useAtom(printsAtom);
	return Object.values(prints);
}

export function usePrint(printId: string | undefined) {
	const [prints, setPrints] = useAtom(printsAtom);

	return [
		printId ? prints[printId] : undefined,
		useCallback(
			function setPrint(updater: (current: IPrint) => IPrint) {
				if (!printId) return;
				setPrints(prev => {
					if (!prev[printId]) return prev;
					return {
						...prev,
						[printId]: updater(prev[printId]),
					};
				});
			},
			[printId, setPrints],
		),
	] as const;
}

export function useTotalPrice() {
	return useAtom(totalPriceAtom)[0];
}
