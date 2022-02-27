import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<div className="w-full font-medium text-white bg-mszk-gray">
			<footer className="flex flex-col justify-center py-8 xl:py-8 px-4 mx-auto w-full max-w-7xl ">
				<div className="flex flex-col xl:flex-row gap-2 xl:gap-16 justify-center w-full">
					<div className="text-sm xl:text-base font-light text-center">
						<div className="flex flex-row justify-center my-4">
							<Image src="/transparent_logo.png" width={336} height={78} />
						</div>
						<p className="text-xl font-normal">BME Managment Szakkollégium</p>
						<p className="mt-1">
							1126 Budapest, Tartsay Vilmos utca 20. II. em. 1.a.
						</p>
						<div className="my-1 leading-4">
							<p>Bankszámlaszám:</p>
							<p>K&H 10400164-01600249-00000000</p>
						</div>
						<div className="my-1 leading-4">
							<p>Adószám:</p>
							<p>19020824-1-43</p>
						</div>
						<p className="my-4 text-xs lg:text-base">
							<Link href="/">főoldal</Link> |{" "}
							<Link href="/projekjeink">projektjeink</Link> |{" "}
							<Link href="/jelentkezz">jelentkezz</Link> |{" "}
							<Link href="/mszk35">mszk35</Link> |{" "}
							<Link href="/kapcsolat">kapcsolat</Link> |{" "}
							<Link href="/tamogatas">támogatás </Link>
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
