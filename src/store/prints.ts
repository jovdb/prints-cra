import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Prints } from "../types";

export const printsAtom = atomWithStorage<Prints>("prints", {});

export const totalPriceAtom = atom(
  (get) => {
		const prints = get(printsAtom);
		return Object
			.values(prints)
			.reduce((prev, print) => prev + print.quantity * 0.5, 0);
	}
);
