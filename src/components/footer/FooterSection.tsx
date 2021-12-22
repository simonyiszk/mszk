type FooterSectionType = {
	title: string;
	children: JSX.Element | JSX.Element[];
};
export function FooterSection({ title, children }: FooterSectionType) {
	return (
		<div>
			<h1>{title}</h1>
			<div>{children}</div>
		</div>
	);
}
