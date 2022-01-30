import { HeaderLink, HeaderLinkDataType } from "@/components/header/HeaderLink";

const fields = [
	{
		text: "Főoldal",
		href: "/",
	},
	{
		text: "Rólunk",
		href: "/rolunk",
		children: [
			{
				text: "Alappilléreink",
				href: "/alappillereink",
			},
			{
				text: "Területeink",
				href: "/teruleteink",
			},
			{
				text: "Tagok",
				href: "/tagok",
			},
			{
				text: "Elnökök",
				href: "/elnökök",
			},
			{
				text: "Galéria",
				href: "/galeria",
			},
			{
				text: "GYIK",
				href: "/gyik",
			},
		],
	},
	{
		text: "Projektjeink",
		href: "/projekteink",
		children: [
			{
				text: "Jelentkezőknek",
				href: "/jelentkezoknek",
			},
			{
				text: "<projekt név>",
				href: "/projekt/consulting-group",
			},
		],
	},
	{
		text: "Jelentkezz",
		href: "/jelentkezz",
	},
	{
		text: "MSZK35",
		href: "/mszk35",
	},
	{
		text: "Kapcsolat",
		href: "/kapcsolat",
	},
	{
		text: "Támogatás",
		href: "/tamogatas",
	},
] as HeaderLinkDataType[];

type HeaderLinkListProps = {
	className?: string;
	showChildren?: boolean;
};

export function HeaderLinkList({
	className,
	showChildren,
}: HeaderLinkListProps) {
	return (
		<ul className={className}>
			{fields.map((e) => (
				<HeaderLink {...e} />
			))}
		</ul>
	);
}
