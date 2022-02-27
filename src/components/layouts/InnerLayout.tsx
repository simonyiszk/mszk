import clsx from "clsx";

type InnerLayoutProps = {
	children: JSX.Element | JSX.Element[];
	className?: string;
};

export function InnerLayout({ children, className }: InnerLayoutProps) {
	return (
		<div className={clsx("px-6 mx-auto w-full", className)}>{children}</div>
	);
}
