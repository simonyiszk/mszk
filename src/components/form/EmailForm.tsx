import Link from "next/link";

import { EmailFormInputs } from "./EmailFormInputs";

export function EmailForm() {
	return (
		<div className="lg:py-16 lg:px-16 my-32 rounded-3xl lg:shadow-mszk-sponsor">
			<h1 className="text-2xl lg:text-4xl font-medium">
				Nem találtad meg a kérdésedre a választ?
			</h1>
			<div className="my-4 lg:text-xl">
				<p>
					A{" "}
					<Link href="/rolunk/tagok" passHref>
						<a className="text-mszk-blue underline">Tagjaink</a>
					</Link>{" "}
					közül bárkinek írhatsz a saját{" "}
					<span className="font-medium">
						&lt;vezeteknev.keresztnev@mszk.bme.hu&gt;
					</span>{" "}
					címén.
				</p>
				{/* https://stackoverflow.com/a/70203951 */}
				<div className="flex relative items-center py-5">
					<div className="flex-grow border-t border-gray-400" />
					<span className="flex-shrink mx-4 text-gray-400">vagy</span>
					<div className="flex-grow border-t border-gray-400" />
				</div>
				<p>
					Kitöltheted az alábbi formot, amire igyekszünk pár napon belül
					válaszolni az általad megadott email címen.
				</p>
			</div>
			<EmailFormInputs />
		</div>
	);
}
