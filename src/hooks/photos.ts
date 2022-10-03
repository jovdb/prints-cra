import { useAtom } from "jotai";
import { useCallback } from "react";
import { photosAtom } from "../store/photos";
import { IPhoto } from "../types";

export function usePhotos() {
	const [photos] = useAtom(photosAtom);
	return Object.values(photos);
}

export function usePhoto(photoId: string | undefined) {
	const [photos, setPhotos] = useAtom(photosAtom);

	return [
		photoId ? photos[photoId]: undefined,
		useCallback(
			function setPhoto(updater: (current: IPhoto) => IPhoto) {
				if (!photoId) return;
				setPhotos(prev => {
					if (!prev[photoId]) return prev;
					return {
						...prev,
						[photoId]: updater(prev[photoId]),
					};
				});
			},
			[photoId, setPhotos],
		),
	] as const;
}
