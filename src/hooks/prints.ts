import { useAtom } from "jotai";
import { useCallback } from "react";
import { printsAtom, IPrint, totalPriceAtom } from "../store/prints";

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
