import Image from "next/image";
import type { MouseEventHandler } from "react";

export type GalleryTileProps = {
	url: string;
	title?: string;
	onClick: MouseEventHandler<HTMLDivElement>;
};

export function GalleryTile({ url, title, onClick }: GalleryTileProps) {
	return (
		<div
			className="relative w-full max-w-xl h-64 cursor-pointer"
			onClick={onClick}
			aria-hidden="true"
		>
			{title && (
				<div className="absolute bottom-0 z-10 p-2 w-full text-white bg-mszk-blue bg-opacity-70">
					<p className="font-medium">{title}</p>
				</div>
			)}
			<Image
				src={url}
				layout="fill"
				objectFit="cover"
				className="w-full transition duration-500 transform hover:scale-110"
			/>
		</div>
	);
}
