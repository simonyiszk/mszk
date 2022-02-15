import { EmailForm } from "@/components/form/EmailForm";
import { InnerLayout } from "@/components/layouts/InnerLayout";
import { QnAElement } from "@/components/qna/QnAElement";

const QandA = [
	{
		question: "Mi az a szakkollégium?",
		answer:
			"Egy tehetséggondozási műhely, ahol a tagok fejlesztik magukat, és a szellemi tőkéjüket felhasználva hoznak létre szenzációs dolgokat.",
	},
	{
		question:
			"Mi lesz velem, ha felvettetek? Milyen elvárásokat támasztotok felém?",
		answer:
			"Az első félév egy bevonóidőszak, az összes újonnan felvett tagjelölti státuszba kerül. Sok olyan programot szervezünk nektek, amin keresztül megismerhetitek a szakkollégium belső működését, a régebbi tagokat és a ti jövőbeli lehetőségeiteket. Ennek egyik eleme, hogy a felvételi után rögtön gyakorlati tapasztalatot szereztek az MSZK projektjei és területei által. A félév végén pedig az aktív tagok Közgyűlése dönt arról, hogy szavazóképes tagi státuszba kerülhettek-e. Elvárás, hogy aktív legyél, és kivedd részedet a szakmai munkából, a képzésekből és a közösségi életből.",
	},
];

export default function FAQPage() {
	return (
		<InnerLayout>
			<div className="my-16">
				<h1 className="text-5xl text-center uppercase">
					Gyakran Ismételt Kérdések
				</h1>
				<ol>
					{QandA.map((e) => (
						<QnAElement key={e.question} {...e} />
					))}
				</ol>
				<EmailForm />
			</div>
		</InnerLayout>
	);
}
