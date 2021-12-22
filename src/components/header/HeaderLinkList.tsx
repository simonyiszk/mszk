import { HeaderLink, HeaderLinkDataType } from "@/components/header/HeaderLink";

const fields = [
	{
		text: "Főoldal",
		href: "/",
	},
	{
		text: "Rólunk",
		href: "/rolunk",
	},
	{
		text: "Projektjeink",
		href: "/projekteink",
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
] as HeaderLinkDataType[];

type HeaderLinkListProps = {
	classnames?: string;
};

export function HeaderLinkList({ classnames }: HeaderLinkListProps) {
	return (
		<ul className={classnames}>
			{fields.map((e) => (
				<HeaderLink href={e.href} text={e.text} />
			))}
		</ul>
	);
}
