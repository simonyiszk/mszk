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
				text: "Consulting Group",
				href: "/projekt/consulting-group",
			},
			{
				text: "ESET",
				href: "/projekt/eset",
			},
			{
				text: "Szakmaraton",
				href: "/projekt/szakmaraton",
			},
			{
				text: "MeMo",
				href: "/projekt/memo",
			},
			{
				text: "Menedzsment Akadémia",
				href: "/projekt/menedzsment-akademia",
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
	classnames?: string;
};

export function HeaderLinkList({ classnames }: HeaderLinkListProps) {
	return (
		<ul className={classnames}>
			{fields.map((e) => (
				<HeaderLink {...e} />
			))}
		</ul>
	);
}
