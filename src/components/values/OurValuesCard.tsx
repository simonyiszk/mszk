import Image from "next/image";

export enum OurValuesIconType {
	LEVELS = "levels",
	IDEA = "idea",
	THUMBSUP = "thumbsup",
}

type IconUrlMap = {
	[key in OurValuesIconType]: string;
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
		<div className="relative p-8 w-96 h-80 rounded-md shadow-lg">
			<div className="relative w-24 h-28">
				<Image src={iconSrc[icon]} layout="fill" />
			</div>
			<div className="my-4">
				<h1 className="text-3xl font-medium">{title}</h1>
				<p className="mt-6">{description}</p>
			</div>
			{/* https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/ */}
			<span className="absolute top-0 right-0 -mt-12 text-ourValueHugeNumber font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-200 to-transparent select-none">
				{number}
			</span>
			{/* TODO REVIEW ME */}
			<div className="flex relative bottom-0 justify-center items-center mx-auto -mt-5 w-16 h-16 bg-mszk-blue rounded-full">
				<span className="text-6xl text-white">+</span>
			</div>
		</div>
	);
}
