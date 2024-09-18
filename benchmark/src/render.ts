import type { Report } from "mitata";

export function render(data: Report) {
	const headers = ["lib", "avg (ns)", "p99 (ns)", "speedup"];

	const separator = headers.map(() => "---");

	const groupsNames = Array.from(
		new Set(data.benchmarks.map((benchmark) => benchmark.group)),
	);

	const results: string[][][] = [];

	for (const group of groupsNames) {
		const baselineAvg = data.benchmarks.find(
			(benchmark) => benchmark.group === group && benchmark.baseline,
		)?.stats?.avg;

		results.push(
			data.benchmarks
				.filter((benchmark) => benchmark.group === group)
				.toSorted((a, b) => a.stats!.avg - b.stats!.avg)
				.map((benchmark) => [
					benchmark.name,
					benchmark.stats?.avg.toFixed(2) ?? "0.00",
					benchmark.stats?.p99.toFixed(2) ?? "0.00",
					baselineAvg
						? (benchmark.stats!.avg / baselineAvg).toFixed(2) + "x"
						: "0.00",
				]),
		);
	}

	return results
		.map((rows, i) =>
			[
				`## ${groupsNames[i]}`,
				headers.join(" | "),
				separator.join(" | "),
				...rows.map((row) => row.join(" | ")),
			].join("\n"),
		)
		.join("\n\n");
}
