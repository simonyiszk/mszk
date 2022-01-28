import { OurValuesCard } from "../values/OurValuesCard";

export function OurValuesPart() {
	return (
		<div className="my-16">
			<h1 className="my-16 text-5xl font-bold text-center text-mszk-blue uppercase">
				Az MSZK értékrendje
			</h1>
			<div className="flex flex-col gap-8 lg:gap-32">
				<div className="flex flex-col lg:flex-row gap-8 justify-around items-center ">
					<OurValuesCard
						icon="levels"
						number={1}
						title="Aktivitás"
						description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
					/>
					<OurValuesCard
						icon="idea"
						number={2}
						title="Csapatszellem"
						description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
					/>
					<OurValuesCard
						icon="thumbsup"
						number={3}
						title="Hitelesség"
						description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
					/>
				</div>
				<div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
					<OurValuesCard
						icon="idea"
						number={4}
						title="Csapatszellem"
						description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
					/>
					<OurValuesCard
						icon="thumbsup"
						number={5}
						title="Hitelesség"
						description="Az MSZK számára érték a kezdeményezőkészség, az új ötletekért, az egyéni..."
					/>
				</div>
			</div>
		</div>
	);
}
