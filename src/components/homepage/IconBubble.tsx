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
				"flex-shrink-0 p-20 w-80 h-80 rounded-full shadow-lg",
				className,
			)}
		>
			<div className="relative w-full h-full">
				<Image src={iconSrc[icon]} layout="fill" />
			</div>
		</div>
	);
}
