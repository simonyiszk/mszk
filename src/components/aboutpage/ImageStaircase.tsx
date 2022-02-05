import clsx from "clsx";
import Image from "next/image";

type ImageStaircaseElement = {
	image: string;
	title: string;
	description: string;
};

const stairCaseData = [
	{
		image: "https://placekitten.com/g/200/300",
		title: "Workshop",
		description: "3-4 órás, délutáni/esti, többnyire eseti képzés",
	},
	{
		image: "https://placekitten.com/g/200/300",
		title: "Tréning",
		description:
			"7-9 órás, egész napos	(egy vagy kettő), többnyire tervezett illetve eseti képzés",
	},
	{
		image: "https://placekitten.com/g/200/300",
		title: "Workshop",
		description:
			"workshop sorozat, tehát 3-4 órás (8-12 alkalmas), délutáni/esti, többnyire tervezett képzés",
	},
] as ImageStaircaseElement[];

export function ImageStaircase() {
	const align = ["justify-start", "justify-center", "justify-end"];
	return (
		<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 my-16 lg:h-200">
			{stairCaseData.map((e, i) => (
				<div className={clsx("flex flex-col text-center", align[i])}>
					<div className="relative mb-8 w-full h-96">
						<Image src={e.image} layout="fill" objectFit="cover" />
					</div>
					<h1 className="text-3xl font-medium ">{e.title}</h1>
					<p className="text-xl lg:text-2xl">{e.description}</p>
				</div>
			))}
		</div>
	);
}
