import Image from "next/image";

type MemberCardType = {
	name: string;
	image: string;
	position?: string;
};
// TODO replace to CDN interface
export function MemberCard({ name, image, position }: MemberCardType) {
	return (
		<div className="flex flex-col items-center">
			<div className="relative flex-shrink-0 w-80 h-80">
				<Image
					src={image}
					layout="fill"
					objectFit="cover"
					className="rounded-full"
				/>
			</div>
			<p>{name}</p>
			<p>{position}</p>
		</div>
	);
}
