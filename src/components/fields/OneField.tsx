import Image from "next/image";

type OneFieldProps = {
	coverImg: string;
	title: string;
	description: string;
	person: {
		name: string;
		img: string;
		title: string;
	};
};

export function OneField({
	coverImg,
	description,
	person,
	title,
}: OneFieldProps) {
	return (
		<div className="overflow-hidden bg-gray-800 rounded-2xl">
			<div className="relative w-full h-56 md:h-64">
				<Image src={coverImg} layout="fill" objectFit="cover" />
			</div>
			<div className="relative p-8 mx-4 -mt-8 mb-4 bg-white rounded-2xl">
				<h1 className="mb-4 text-2xl font-bold uppercase">{title}</h1>
				<p>{description}</p>

				<div className="flex flex-row gap-4 mt-4">
					<div className="relative flex-shrink-0 w-12 h-12">
						<Image
							src={person.img}
							layout="fill"
							objectFit="cover"
							className="rounded-full"
						/>
					</div>
					<div className="flex flex-col">
						<h1 className="font-medium text-mszk-blue">{person.name}</h1>
						<p className="text-sm">{person.title}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
