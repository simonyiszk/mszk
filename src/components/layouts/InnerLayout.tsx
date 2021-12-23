type InnerLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export function InnerLayout({ children }: InnerLayoutProps) {
	return <div className="px-6 mx-auto w-full">{children}</div>;
}
