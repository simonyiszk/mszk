import Image from "next/image";

export function Footer() {
	return (
		<div className="w-full font-medium text-white bg-mszk-gray">
			<footer className="flex flex-col justify-center py-8 xl:py-8 px-4 mx-auto w-full max-w-7xl ">
				<div className="flex flex-col xl:flex-row gap-2 xl:gap-16 justify-center w-full">
					<div className="text-sm xl:text-base font-light text-center">
						<div className="flex flex-row justify-center my-4">
							<div className="relative w-64 h-16">
								<Image src="/transparent_logo.png" layout="fill" />
							</div>
						</div>
						<h1 className="text-xl font-normal">BME Managment Szakkollégium</h1>
						<p>1126 Budapest, Tartsay Vilmos utca 20. II. em. 1.a.</p>
						<p>Bankszámlaszám:</p>
						<p>K&H 10400164-01600249-00000000</p>
						<p>Adószám:</p>
						<p>19020824-1-43</p>
						<p className="text-xs lg:text-base">
							főoldal | projektjeink | jelentkezz | mszk35 | kapcsolat |
							támogatás{" "}
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
