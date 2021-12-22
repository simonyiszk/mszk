import { MenuIcon, XIcon } from "@heroicons/react/outline";

type HeaderHamburgerButtonProps = {
	onClick: React.MouseEventHandler<SVGSVGElement>;
	isOpen: boolean;
};

export function HamburgerButton({
	onClick,
	isOpen,
}: HeaderHamburgerButtonProps) {
	if (!isOpen) {
		return (
			<MenuIcon
				className="w-8 h-full text-white cursor-pointer select-none"
				onClick={onClick}
			/>
		);
	}
	return (
		<XIcon
			className="w-8 h-full text-white cursor-pointer select-none"
			onClick={onClick}
		/>
	);
}
