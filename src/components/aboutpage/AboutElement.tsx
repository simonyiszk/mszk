import clsx from "clsx";

type AboutElementProps = {
	title?: string;
	description?: string;
	children?: JSX.Element | JSX.Element[];
	className?: string;
};
export function AboutElement({
	title,
	description,
	children,
	className,
}: AboutElementProps) {
	return (
		<div className={clsx("my-16", className)}>
			{title && (
				<h1 className="mb-5 text-2xl lg:text-4xl font-medium uppercase">
					{title}
				</h1>
			)}
			{description && <p className="text-lg lg:text-2xl ">{description}</p>}
			<div>{children}</div>
		</div>
	);
}
