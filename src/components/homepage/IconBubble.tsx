import clsx from "clsx";
import Image from "next/image";

type IconBubbleProps = {
	icon: "heart" | "settings" | "chartUp";
	className?: string;
};

const iconSrc = {
	heart: "/icons/heart.svg",
	settings: "/icons/settings.svg",
	chartUp: "/icons/chart_up.svg",
};

export function IconBubble({ icon, className }: IconBubbleProps) {
	return (
		<div
			className={clsx(
				"flex-shrink-0 p-4 lg:p-20 w-16 lg:w-64 xl:w-80 h-16 lg:h-64 xl:h-80 rounded-full shadow-lg",
				className,
			)}
		>
			<div className="relative w-full h-full">
				<Image src={iconSrc[icon]} layout="fill" />
			</div>
		</div>
	);
}
