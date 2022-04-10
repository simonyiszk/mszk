import Image from "next/image";

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
		<div className="relative p-8 w-full max-w-sm h-96 rounded-md shadow-lg">
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
			<div className="flex justify-center items-center mx-auto mt-12 w-16 h-16 bg-mszk-blue rounded-full">
				<span className="text-6xl text-white">+</span>
			</div>
		</div>
	);
}
