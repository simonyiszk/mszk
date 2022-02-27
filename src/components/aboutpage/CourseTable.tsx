type CourseTableContent = {
	lhs: string;
	rhs: string;
};

const data: CourseTableContent[] = [
	{
		lhs: "Üzleti Alapozó Ismeretek kurzus1",
		rhs: " A tagság üzleti tudásának egy szintre hozása",
	},
	{
		lhs: "Önismereti tréning1",
		rhs: "fejlődéshez elengedhetetlen a megfelelő önismeret, a képzés ennek alapjait kívánja megadni",
	},
	{
		lhs: "Üzleti Alapozó Ismeretek kurzus2",
		rhs: " A tagság üzleti tudásának egy szintre hozása",
	},
	{
		lhs: "Önismereti tréning2",
		rhs: "fejlődéshez elengedhetetlen a megfelelő önismeret, a képzés ennek alapjait kívánja megadni",
	},
];

export function CourseTable() {
	return (
		<div className="my-16 text-lg lg:text-2xl">
			<h1 className="py-6 text-3xl font-bold text-center bg-gray-200">
				Alapvető képzéseink
			</h1>
			<div className="w-full">
				{/* header row */}
				<div className="flex flex-row gap-y-4 w-full font-semibold">
					<div className="py-2 px-2 lg:px-16 w-1/2 bg-mszk-blue">
						<h2>Név</h2>
					</div>
					<div className="py-2 px-2 lg:px-16 w-1/2 bg-gray-400">
						<h2>Cél</h2>
					</div>
				</div>
				{/* content */}
				<div className="flex flex-col divide-y-2 divide-white">
					{data.map((e) => {
						return (
							<div
								key={e.lhs + e.rhs}
								className="flex flex-row gap-y-4 w-full"
								id="coursesTable"
							>
								<div className="flex items-center py-2 px-2 lg:px-16 w-1/2 font-semibold bg-mszk-light-blue">
									<h2>{e.lhs}</h2>
								</div>
								<div className="py-2 px-2 lg:px-16 w-1/2 font-light bg-gray-200">
									<h2>{e.rhs}</h2>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
