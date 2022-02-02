const bankinfo = [
	{
		key: "Név",
		value: "BME Management Szakkollégium",
	},
	{
		key: "Cím",
		value: "1126 Budapest, Tartsay Vilmos utca 20. II. em. 1.a.",
	},
	{
		key: "Adószám",
		value: "19020824-1-43",
	},
	{
		key: "Bankszámlaszám",
		value: " K&H 10400164-01600249-00000000",
	},
];

export function BankInfo() {
	return (
		<div className="flex flex-col gap-y-4 md:gap-y-4 justify-center items-center my-8 lg:text-xl">
			{bankinfo.map((e) => (
				<div
					key={e.key}
					className="flex flex-col md:flex-row gap-x-2 md:gap-x-8"
				>
					<div className="w-full font-medium text-center md:text-right uppercase">
						{e.key}
					</div>
					<div className="w-full text-center md:text-left">{e.value}</div>
				</div>
			))}
		</div>
	);
}
