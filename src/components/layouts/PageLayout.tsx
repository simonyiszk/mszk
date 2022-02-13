import clsx from "clsx";
import { useRouter } from "next/router";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

type PageLayoutProps = {
	children: JSX.Element | JSX.Element[];
};

export function PageLayout({ children }: PageLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main
				className={clsx(
					"flex-1 mx-auto w-full max-w-6xl",
					useRouter().pathname === "/" && "lg:-mt-32",
				)}
			>
				{children}
			</main>
			<Footer />
		</div>
	);
}
