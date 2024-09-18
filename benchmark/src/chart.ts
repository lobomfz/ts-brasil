import * as d3 from "d3";
import { JSDOM } from "jsdom";
import type { BenchmarkData } from "./runner";

// tudo gpt

const createSVG = (width: number, height: number) => {
	const { document } = new JSDOM().window;
	return d3
		.select(document.body)
		.append("svg")
		.attr("width", width)
		.attr("height", height)
		.attr("xmlns", "http://www.w3.org/2000/svg");
};

const createScales = (
	data: { name: string; value: number }[],
	innerWidth: number,
	innerHeight: number,
) => {
	const sortedData = [...data].sort((a, b) => a.value - b.value);
	const x = d3
		.scaleBand()
		.domain(sortedData.map((d) => d.name))
		.range([0, innerWidth])
		.padding(0.2);

	const y = d3
		.scaleLinear()
		.domain([0, d3.max(sortedData, (d) => d.value) as number])
		.range([innerHeight, 0]);

	return { x, y, sortedData };
};

const drawBars = (
	g: d3.Selection<SVGGElement, unknown, null, undefined>,
	data: { name: string; value: number }[],
	x: d3.ScaleBand<string>,
	y: d3.ScaleLinear<number, number>,
	innerHeight: number,
) => {
	g.selectAll("rect")
		.data(data)
		.enter()
		.append("rect")
		.attr("x", (d) => x(d.name) as number)
		.attr("y", (d) => y(d.value))
		.attr("width", x.bandwidth())
		.attr("height", (d) => innerHeight - y(d.value))
		.attr("fill", (d) =>
			d.name === "lobomfz/ts-brasil" ? "#ff6b6b" : "#4ecdc4",
		);
};

const drawAxes = (
	g: d3.Selection<SVGGElement, unknown, null, undefined>,
	x: d3.ScaleBand<string>,
	y: d3.ScaleLinear<number, number>,
	innerHeight: number,
) => {
	g.append("g")
		.attr("transform", `translate(0,${innerHeight})`)
		.call(d3.axisBottom(x))
		.selectAll("text")
		.attr("transform", "rotate(-45)")
		.style("text-anchor", "end")
		.style("fill", "white");

	g.append("g")
		.call(d3.axisLeft(y).tickFormat((d) => d3.format(".2s")(+d)))
		.call((g) => {
			g.selectAll(".tick line").attr("stroke", "white");
			g.selectAll(".tick text").style("fill", "white");
			g.selectAll(".domain").attr("stroke", "white");
		});
};

const addLabels = (
	svg: d3.Selection<SVGSVGElement, unknown, null, undefined>,
	width: number,
	height: number,
	title: string,
) => {
	svg
		.append("text")
		.attr("x", width / 2)
		.attr("y", height - 5)
		.attr("text-anchor", "middle")
		.text("lib")
		.style("fill", "white");

	svg
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("x", -height / 2)
		.attr("y", 15)
		.attr("text-anchor", "middle")
		.text("tempo (ns)")
		.style("fill", "white");

	svg
		.append("text")
		.attr("x", width / 2)
		.attr("y", 30)
		.attr("text-anchor", "middle")
		.style("font-size", "18px")
		.style("font-weight", "bold")
		.text(title)
		.style("fill", "white");
};

const addValueLabels = (
	g: d3.Selection<SVGGElement, unknown, null, undefined>,
	data: { name: string; value: number }[],
	x: d3.ScaleBand<string>,
	y: d3.ScaleLinear<number, number>,
) => {
	g.selectAll(".label")
		.data(data)
		.enter()
		.append("text")
		.attr("class", "label")
		.attr("x", (d) => (x(d.name) as number) + x.bandwidth() / 2)
		.attr("y", (d) => y(d.value) - 5)
		.attr("text-anchor", "middle")
		.text((d) => d3.format(".2s")(d.value))
		.style("fill", "white");
};

const createChart = (
	data: { name: string; value: number }[],
	title: string,
) => {
	const width = 800;
	const height = 500;
	const margin = { top: 40, right: 30, bottom: 80, left: 80 };

	const innerWidth = width - margin.left - margin.right;
	const innerHeight = height - margin.top - margin.bottom;

	const svg = createSVG(width, height);
	const g = svg
		.append("g")
		.attr("transform", `translate(${margin.left},${margin.top})`);

	const { x, y, sortedData } = createScales(data, innerWidth, innerHeight);

	drawBars(g, sortedData, x, y, innerHeight);
	drawAxes(g, x, y, innerHeight);
	addLabels(svg, width, height, title);
	addValueLabels(g, sortedData, x, y);

	return svg.node()?.outerHTML;
};

export const generateCharts = (benchmarkData: BenchmarkData) => {
	const charts: { [key: string]: string } = {};

	const groupedBenchmarks = benchmarkData.benchmarks.reduce(
		(acc, benchmark) => {
			if (!acc[benchmark.group!]) {
				acc[benchmark.group!] = [];
			}
			acc[benchmark.group!].push({
				name: benchmark.name,
				value: benchmark.stats.avg!,
			});
			return acc;
		},
		{} as { [key: string]: { name: string; value: number }[] },
	);

	for (const [group, data] of Object.entries(groupedBenchmarks)) {
		charts[group] = createChart(data, group)!;
	}

	return charts;
};
