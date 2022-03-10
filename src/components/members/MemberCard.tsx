import Image from "next/image";
import { BsEnvelopeFill, BsLinkedin } from "react-icons/bs";

type MemberCardType = {
	name: string;
	image: string;
	position?: string;
	// for contact page
	other?: string;
	email?: string;
	linkedin?: string;
};
// TODO replace to CDN interface
export function MemberCard({
	name,
	image,
	position,
	other,
	email,
	linkedin,
}: MemberCardType) {
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
				<p className="py-2 text-lg text-center">{other}</p>
				<div className="flex flex-row gap-2">
					{email && (
						<a href={`mailto:${email}`}>
							<BsEnvelopeFill />
						</a>
					)}
					{linkedin && (
						<a href={linkedin} target="_blank" rel="noreferrer">
							<BsLinkedin />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}
