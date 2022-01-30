import clsx from "clsx";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";

export type HeaderLinkDataType = {
	text: string;
	href: string;
	children?: HeaderLinkDataType[];
};

type HeaderLinkProps = {
	classnames?: string;
} & HeaderLinkDataType;
export function HeaderLink({
	text,
	href,
	children,
	classnames,
}: HeaderLinkProps) {
	const [isHover, setIsHover] = useState(false);

	Router.events.on("routeChangeStart", () => {
		setIsHover(false);
	});

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
			<Link href={href}>
				<a
					className={clsx(
						classnames,
						useRouter().pathname === href && "font-bold",
					)}
				>
					{text}
				</a>
			</Link>
			<div
				className={clsx(
					isHover && children && children.length > 0
						? "hidden xl:block"
						: "hidden",
					"flex absolute flex-col py-4 px-4 text-black bg-white rounded-lg divide-y-2 shadow-xl",
				)}
			>
				{children?.map((e) => (
					<HeaderLink key={e.href} {...e} href={href + e.href} />
				))}
			</div>
		</div>
	);
}
