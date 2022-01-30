import Router from "next/router";
import { useState } from "react";

import { HamburgerButton } from "@/components/header/HamburgerButton";
import { Logo } from "@/components/header/Logo";

import { CustomMobileDropDownMenu } from "./CustomMobileDropDownMenu";
import { HeaderLinkList } from "./HeaderLinkList";

export function Header() {
	const [isOpen, setIsOpen] = useState(false);

	Router.events.on("routeChangeStart", () => {
		setIsOpen(false);
	});

	return (
		<>
			<div className="z-30 w-full">
				<div className="w-full h-16 xl:h-20 bg-mszk-blue">
					<header className="flex flex-row justify-between items-center px-6 xl:px-8 mx-auto max-w-7xl h-full">
						<div className="relative ">
							<Logo />
						</div>
						<div className="xl:hidden">
							<HamburgerButton
								onClick={() => setIsOpen(!isOpen)}
								isOpen={isOpen}
							/>
						</div>
						<nav className="hidden xl:inline-block">
							<HeaderLinkList className="flex flex-row gap-6 lg:text-2xl text-white" />
						</nav>
					</header>
				</div>
			</div>
			{isOpen && <CustomMobileDropDownMenu setIsOpen={setIsOpen} />}
		</>
	);
}
