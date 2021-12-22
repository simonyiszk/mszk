import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

export type HeaderLinkDataType = {
	text: string;
	href: string;
};

type HeaderLinkProps = {
	classnames?: string;
} & HeaderLinkDataType;
export function HeaderLink({ text, href, classnames }: HeaderLinkProps) {
	return (
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
	);
}
