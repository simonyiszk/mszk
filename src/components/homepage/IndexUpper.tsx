import Image from "next/image";

export function IndexUpper() {
	return (
		<div className="lg:pl-20 mb-96 md:mb-64">
			<div className="w-full h-72 md:h-96 lg:h-200 2xl:h-160">
				<div className="w-full h-full bg-cover bg-hero-img rounded-b-3xl lg:rounded-b-none lg:rounded-bl-4xl">
					<div className="flex flex-col justify-center items-center lg:items-start px-8 lg:px-32 w-full h-full text-center text-white">
						<h1 className="text-5xl lg:text-7xl font-bold">MSZK</h1>
						<h2 className="text-3xl lg:text-6xl font-light">
							leadership playground
						</h2>
					</div>
				</div>
				<div className="grid grid-cols-3 p-8 mx-auto -mt-16 lg:-mt-32 w-4/5 bg-white rounded-lg shadow-lg">
					<div className="hidden lg:inline-block relative lg:col-span-1 m-8">
						<Image src="/icons/building.svg" layout="fill" priority />
					</div>
					<div className="flex flex-col col-span-3 lg:col-span-2 gap-4">
						<h1 className="text-2xl lg:text-3xl 2xl:text-2xl font-light uppercase">
							A Szakkollégium
						</h1>
						<p className="text-base md:text-base lg:text-xl 2xl:text-lg">
							Az első BME-s alapítású szakkollégium, melynek célja, hogy
							felkészítse tagjait a vezetői szerepre a leadership playground
							koncepció alkalmazásával. Különlegesen büszkék vagyunk diverz
							tagságunkra, akik a szakkollégium neve ellenére több különböző
							egyetemről és szakterületről érkeznek szervezetünkbe.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
