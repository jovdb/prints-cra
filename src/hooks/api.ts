import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { photosAtom } from "../store/photos";
import { printsAtom } from "../store/prints";

import type * as StateJson from "../../public/data/state.json";

async function getData() {
	const response = await fetch(`${process.env.PUBLIC_URL}/data/state.json`, {
		headers: {
			'Accept': 'application/json',
		},
	});
	if (!response.ok) throw new Error("Error loading state");
	try {
		return response.json() as Promise<typeof StateJson>;
	} catch(e: any) {
		throw new Error(`Error parsing JSON file. ${e.message || e.name || e || ""}`)
	}
}

export function useInitState() {
	const { data } = useQuery('api', getData, { staleTime: Infinity, refetchOnWindowFocus: false, refetchOnMount: false })

	const setPrints = useSetAtom(printsAtom);
	const setPhotos = useSetAtom(photosAtom);

	useEffect(() => {
		if (!data) return;
		setPrints(prints => Object.keys(prints).length ? prints : data.prints as any);
		setPhotos(photos => Object.keys(photos).length ? photos : data.photos);
	}, [data, setPhotos, setPrints]);
}
