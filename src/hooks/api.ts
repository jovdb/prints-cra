import { useEffect } from "react";
import { useQuery } from "react-query";
import { useStore } from "../hooks/store";

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
	const initState = useStore((s) => s.setStore);

	useEffect(() => {
		if (!data) return;
		initState((prevState) => ({
			prints: Object.keys(prevState.prints).length ? prevState.prints : data.prints,
			photos: Object.keys(prevState.photos).length ? prevState.photos : data.photos,
		}));
	}, [data, initState]);
}
