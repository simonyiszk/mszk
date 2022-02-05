import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { AboutElement } from "@/components/aboutpage/AboutElement";
import { CourseTable } from "@/components/aboutpage/CourseTable";
import { ImageStaircase } from "@/components/aboutpage/ImageStaircase";
import { InnerLayout } from "@/components/layouts/InnerLayout";
import aboutStatic from "@/content/about.json";

export default function AboutUsPage() {
	return (
		<InnerLayout>
			<div className="relative w-full h-48 lg:h-96">
				<span className="absolute bottom-0 left-0 z-10 -my-4 lg:-my-8 -mx-4 text-7xl lg:text-11xl font-black text-white select-none">
					MSZK
				</span>
				<Image
					src="https://placekitten.com/g/200/300"
					objectFit="cover"
					layout="fill"
					className="z-0"
				/>
			</div>

			<AboutElement description={aboutStatic.description} />

			<AboutElement title="Szervezeti felépítés">
				<div className="relative w-full h-64 lg:h-200">
					<Image
						src="/images/org_structure.png"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</AboutElement>
			<AboutElement
				title="Képzési rendszer"
				description={aboutStatic["kepzesi-rendszer"].upper}
			>
				<ImageStaircase />
				<p className="my-16 text-lg lg:text-2xl text-justify">
					{aboutStatic["kepzesi-rendszer"].lower}
				</p>
			</AboutElement>
			<CourseTable />
			<AboutElement
				title="Misi rendszer"
				description={aboutStatic["misi-rendszer"].description}
			>
				<div className="my-16">
					<div className="relative w-full h-80">
						<Image
							src="https://placekitten.com/g/200/300"
							objectFit="cover"
							layout="fill"
							className="z-0"
						/>
					</div>
				</div>
				<Link href="/rolunk/galeria" passHref>
					<div className="flex flex-row gap-8 justify-end items-center cursor-pointer">
						<p className="text-2xl font-semibold">Tovább a galériához!</p>
						<div className="text-6xl text-mszk-blue">
							<BsFillArrowRightCircleFill />
						</div>
					</div>
				</Link>
			</AboutElement>
			<AboutElement
				title="Beszámolórendszer"
				description={aboutStatic["beszamolo-rendszer"].description}
				className="mb-32"
			/>
		</InnerLayout>
	);
}
