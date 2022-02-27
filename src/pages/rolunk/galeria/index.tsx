import "react-image-lightbox/style.css";

import { useState } from "react";
import Lightbox from "react-image-lightbox";

import {
	GalleryTile,
	GalleryTileProps,
} from "@/components/gallery/GalleryTile";
import { InnerLayout } from "@/components/layouts/InnerLayout";

const images = [
	{
		url: "http://placekitten.com/200/300",
		title: "Cica a hóban, 2020",
	},
	{
		url: "http://placekitten.com/g/200/300",
		title: "Cica a hóban, 2021",
	},
	{
		url: "http://placekitten.com/200/300",
	},
	{
		url: "http://placekitten.com/200/300",
	},
	{
		url: "http://placekitten.com/200/300",
	},
] as GalleryTileProps[];

export default function GalleryPage() {
	const [photoIndex, setPhotoIndex] = useState(0);
	const [isOpen, setIsOpen] = useState(false);
	return (
		<InnerLayout>
			<div className="my-16">
				<h1 className="text-5xl text-center uppercase">Galéria</h1>
				<div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 my-8 w-full h-full">
					{images.map((e, i) => (
						<GalleryTile
							key={e.url}
							{...e}
							onClick={() => {
								setPhotoIndex(i);
								setIsOpen(true);
							}}
						/>
					))}
				</div>
				{isOpen && (
					<Lightbox
						mainSrc={`${images[photoIndex].url}`}
						nextSrc={`${images[(photoIndex + 1) % images.length].url}`}
						prevSrc={`${
							images[(photoIndex + images.length - 1) % images.length].url
						}`}
						imageTitle={images[photoIndex].title}
						onCloseRequest={() => setIsOpen(false)}
						onMoveNextRequest={() =>
							setPhotoIndex((photoIndex + 1) % images.length)
						}
						onMovePrevRequest={() =>
							setPhotoIndex((photoIndex + images.length - 1) % images.length)
						}
					/>
				)}
			</div>
		</InnerLayout>
	);
}
