import { atom, useAtom } from "jotai";
import { useCallback } from "react";

export interface IPhoto {
	id: string;
	url: string;
	fileName: string;
	fileSize: number;
}

export type Photos = Record<string, IPhoto>;

const defaultPhotos: Photos = {
	"1": {
			id: "1",
			url: "https://picsum.photos/id/237/800/576",
			fileName: "Photo1.jpg",
			fileSize: 1020153,
	},
	"2": {
			id: "2",
			url: "https://picsum.photos/id/236/576/800",
			fileName: "Photo8.jpg",
			fileSize: 1321465,
	},
	"3": {
			id: "3",
			url: "https://picsum.photos/id/235/800/576",
			fileName: "Photo15.jpg",
			fileSize: 1321465,
	},
	"4": {
			id: "4",
			url: "https://picsum.photos/id/234/800/576",
			fileName: "Photo 11.jpg",
			fileSize: 1321465,
	},
	"5": {
			id: "5",
			url: "https://picsum.photos/id/233/800/576",
			fileName: "Photo5.jpg",
			fileSize: 1321465,
	},
};

export const photosAtom = atom<Photos>(defaultPhotos);

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
