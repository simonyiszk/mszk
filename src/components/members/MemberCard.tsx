import Image from "next/image";

export type MemberCardType = {
	name: string;
	image: string;
	position?: string;
	order: number;
};
// TODO replace to CDN interface
export function MemberCard({ name, image, position }: MemberCardType) {
	return (
		<div className="flex flex-col items-center">
			<div className="relative flex-shrink-0 w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80">
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					className="rounded-full"
				/>
			</div>
			<div className="flex flex-col items-center my-4 text-2xl">
				<p>{name}</p>
				<p>{position}</p>
			</div>
		</div>
	);
}
