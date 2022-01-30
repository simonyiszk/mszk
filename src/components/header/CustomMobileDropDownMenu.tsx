import type { Dispatch, SetStateAction } from "react";

import { HeaderLinkList } from "./HeaderLinkList";

export function CustomMobileDropDownMenu({
	setIsOpen,
}: {
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div className="xl:hidden absolute h-screen">
			<div className="fixed right-0 z-50 w-2/3 h-full text-black bg-white">
				<div>
					<span>X</span>
				</div>
				<nav className="flex py-32 h-full">
					<HeaderLinkList className="flex flex-col justify-around items-center py-2 w-full text-lg" />
				</nav>
			</div>
			<span
				aria-label="Menü bezárása"
				className="fixed z-40 w-full h-full bg-black bg-opacity-60"
				onClick={() => setIsOpen(false)}
				onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)}
				role="button"
				tabIndex={0}
			/>
		</div>
	);
}
