import Image from "next/image";

import { InnerLayout } from "../layouts/InnerLayout";

type OneFieldProps = {
	coverImg: string;
	title: string;
	description: string;
	personImg: string;
};

export function OneField({
	coverImg,
	description,
	personImg,
	title,
}: OneFieldProps) {
	return (
		<div className="my-24 w-full">
			<div className="relative w-full h-32 md:h-96">
				<Image src={coverImg} layout="fill" objectFit="cover" />
			</div>
			<InnerLayout>
				<div className="flex flex-col md:flex-row gap-8 items-center my-8">
					<div>
						<h1 className="mb-4 text-2xl font-bold uppercase">{title}</h1>
						<p className="lg:text-lg">{description}</p>
					</div>
					<div className="relative flex-shrink-0 w-32 h-32">
						<Image
							src={personImg}
							layout="fill"
							objectFit="cover"
							className="rounded-full"
						/>
					</div>
				</div>
			</InnerLayout>
		</div>
	);
}
