import { useEffect } from "react";
import { useQuery } from "react-query";
import { usePrintsActions } from "./prints";
import { usePhotosActions } from "./photos";

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
	const { reset: resetPrints } = usePrintsActions();
	const { reset: resetPhotos } = usePhotosActions();

	useEffect(() => {
		if (!data) return;
		resetPrints(data.prints);
		resetPhotos(data.photos);
	}, [data, resetPhotos, resetPrints]);
}
