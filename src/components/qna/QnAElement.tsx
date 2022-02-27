type QnAElementProps = {
	question: string;
	answer: string;
};

export function QnAElement({ answer, question }: QnAElementProps) {
	return (
		<li className="my-12 lg:my-16">
			<dl className="mb-2 text-2xl font-medium">{question}</dl>
			<dt className="text-xl ">{answer}</dt>
		</li>
	);
}
