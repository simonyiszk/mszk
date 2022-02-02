import Image from "next/image";
import Link from "next/link";

type OurValuesIconType = "levels" | "idea" | "thumbsup";

type IconUrlMap = {
	[key: string]: string;
};

const iconSrc: IconUrlMap = {
	levels: "/icons/levels_flag.svg",
	idea: "/icons/idea_lightbulb.svg",
	thumbsup: "/icons/thumbs_up.svg",
};

type OurValuesCardProps = {
	icon: OurValuesIconType;
	title: string;
	description: string;
	number: number;
};

export function OurValuesCard({
	icon,
	title,
	description,
	number,
}: OurValuesCardProps) {
	return (
		<Link href="/rolunk" passHref>
			<a aria-label="További információ rólunk" className="w-full">
				<div className="relative p-8 w-full h-auto rounded-3xl lg:rounded-md focus:ring-1 shadow-lg cursor-pointer">
					<div className="relative w-24 h-28">
						<Image src={iconSrc[icon]} layout="fill" priority />
					</div>
					<div className="my-4">
						<h1 className="text-3xl font-medium">{title}</h1>
						<p className="mt-6 text-xl">{`${description.slice(0, 82)}...`}</p>
					</div>
					{/* https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/ */}
					<span className="absolute top-0 right-0 -mt-12 text-11xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-transparent select-none">
						{number}
					</span>
				</div>
			</a>
		</Link>
	);
}
