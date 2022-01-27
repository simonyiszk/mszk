type CourseTableContent = {
	lhs: string;
	rhs: string;
};

export function CourseTable() {
	const data: CourseTableContent[] = [
		{
			lhs: "Üzleti Alapozó Ismeretek kurzus",
			rhs: " A tagság üzleti tudásának egy szintre hozása",
		},
		{
			lhs: "Önismereti tréning",
			rhs: "fejlődéshez elengedhetetlen a megfelelő önismeret, a képzés ennek alapjait kívánja megadni",
		},
		{
			lhs: "Üzleti Alapozó Ismeretek kurzus",
			rhs: " A tagság üzleti tudásának egy szintre hozása",
		},
		{
			lhs: "Önismereti tréning",
			rhs: "fejlődéshez elengedhetetlen a megfelelő önismeret, a képzés ennek alapjait kívánja megadni",
		},
	];
	return (
		<div className="my-16 text-2xl">
			<h1 className="py-4 text-3xl font-bold text-center bg-gray-200">
				Alapvető képzéseink
			</h1>
			<table className="w-full border-collapse table-fixed ">
				<thead>
					<tr className="py-4">
						<th className="bg-mszk-blue">Név</th>
						<th className="bg-gray-400">Cél</th>
					</tr>
				</thead>
				<tbody>
					{data.map((e) => (
						<tr>
							<td className="font-medium bg-mszk-light-blue">{e.lhs}</td>
							<td className="font-light bg-gray-300">{e.rhs}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
