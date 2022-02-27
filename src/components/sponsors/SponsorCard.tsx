import Image from "next/image";

export type SponsorCardProps = {
	name: string;
	image: string;
	description?: string;
};

export function SponsorCard({ name, image, description }: SponsorCardProps) {
	return (
		<div className="flex sm:flex-row gap-6 items-center p-4 w-full bg-gray-100 rounded-lg shadow-mszk-sponsor">
			<div className="relative w-32 h-32">
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					className="flex-shrink-0"
				/>
			</div>
			<div>
				<h1 className="text-2xl font-medium">{name}</h1>
				<p>{description}</p>
			</div>
		</div>
	);
}
