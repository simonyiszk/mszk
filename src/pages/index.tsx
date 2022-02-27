import { CenterPart } from "@/components/homepage/CenterPart";
import { IndexUpper } from "@/components/homepage/IndexUpper";
import { MembersPart } from "@/components/homepage/MembersPart";
import { OurValuesPart } from "@/components/homepage/OurValuesPart";
import { SponsorsPart } from "@/components/homepage/SponsorsPart";
import { InnerLayout } from "@/components/layouts/InnerLayout";
import { members, sponsors } from "@/mock";

export default function Page() {
	return (
		<>
			<IndexUpper />
			<InnerLayout className="mb-64">
				<OurValuesPart />
			</InnerLayout>
			<CenterPart />
			<InnerLayout>
				<MembersPart members={members} />
				<SponsorsPart sponsors={sponsors} />
			</InnerLayout>
		</>
	);
}
