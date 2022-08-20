<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { arc as d3arc, interpolate, symbol, symbolTriangle, select } from 'd3';

	let el_chart;
	export let show_current_data = false;

	// #region [DATA]
	const getAngle = (n, all = 500) => Math.PI * (n / all) - Math.PI / 2;

	const DATA = Object.freeze([
		{
			total: 500,
			numeric: {
				gov: 254,
				opp: 246,
				fluid_opp: 0,
				empty: 0
			},
			sections: [
				{ name: 'gov', startAngle: getAngle(0), endAngle: getAngle(254), fill: '#5b5b5b' },
				{ name: 'opp', startAngle: getAngle(254), endAngle: getAngle(500), fill: '#d9d9d9' },
				{
					name: 'fluid_opp',
					startAngle: getAngle(500),
					endAngle: getAngle(500),
					fill: '#a0a0a0',
					stroke: 'transparent'
				},
				{
					name: 'empty',
					startAngle: getAngle(500),
					endAngle: getAngle(500),
					fill: 'transparent',
					'stroke-dasharray': '1,1'
				}
			]
		},
		{
			total: 485,
			numeric: {
				gov: 258,
				opp: 209,
				fluid_opp: 18,
				empty: 15
			},
			sections: [
				{ name: 'gov', startAngle: getAngle(0), endAngle: getAngle(258), fill: '#5b5b5b' },
				{ name: 'opp', startAngle: getAngle(258), endAngle: getAngle(467), fill: '#d9d9d9' },
				{ name: 'fluid_opp', startAngle: getAngle(467), endAngle: getAngle(485), fill: '#a0a0a0' },
				{
					name: 'empty',
					startAngle: getAngle(485),
					endAngle: getAngle(500),
					fill: 'transparent',
					stroke: '#5b5b5b'
				}
			]
		}
	]);
	// #endregion

	let svg;
	let update;

	const width = 550,
		height = 400,
		radius = 200;

	// #region [ARC INIT]
	let arc = d3arc()
		.innerRadius(radius - 125)
		.outerRadius(radius - 20);

	function arcTween(d) {
		var i = interpolate(this._current, d);
		this._current = i(0);

		return function (t) {
			return arc(i(t));
		};
	}
	// #endregion

	onMount(() => {
		svg = select(el_chart)
			.attr('viewBox', `0 0 ${width} ${height}`)
			.append('g')
			.attr('transform', `translate(${width / 2}, ${height / 2 + radius / 2})`);

		// #region [FLUID OPP TEXT]
		const fluid_opp_text_group = svg.append('g').attr('class', 'fluid-opp-text num-text');

		fluid_opp_text_group
			.append('text')
			.attr('x', 0)
			.attr('y', -16)
			.attr('text-anchor', 'middle')
			.text('ฝ่ายอิสระ');

		fluid_opp_text_group
			.append('text')
			.attr('class', 'num')
			.attr('x', 0)
			.attr('y', 0)
			.attr('text-anchor', 'middle')
			.text(`18 คน`);

		fluid_opp_text_group
			.append('path')
			.attr('d', symbol().type(symbolTriangle).size(40))
			.attr('fill', '#000')
			.attr('transform', `translate(-33,-20) rotate(-90)`);
		// #endregion

		// #region [ARC]
		svg
			.append('g')
			.attr('class', 'arc')
			.selectAll('path')
			.data(DATA[0].sections, (d) => d.name)
			.enter()
			.append('path')
			.each(function (d) {
				this._current = d;
			})
			.attr('fill', (d) => d.fill)
			.attr('stroke', (d) => d.stroke ?? d.fill)
			.attr('stroke-dasharray', (d) => d['stroke-dasharray'])
			.attr('d', arc);
		// #endregion

		// #region [TOTAL TEXT]
		const total_text_group = svg.append('g').attr('class', 'total-text');

		total_text_group
			.append('text')
			.attr('class', 'total')
			.attr('x', 0)
			.attr('y', -21)
			.attr('text-anchor', 'middle')
			.text(DATA[0].total);

		total_text_group
			.append('text')
			.attr('x', 0)
			.attr('y', 0)
			.attr('text-anchor', 'middle')
			.text('คน');
		// #endregion

		// #region [CENTER LINE]
		const center_line_group = svg.append('g').attr('class', 'center-line');

		center_line_group
			.append('line')
			.attr('x1', 0)
			.attr('y1', -radius + 5)
			.attr('x2', 0)
			.attr('y2', -75)
			.attr('stroke', '#F94141')
			.attr('stroke-width', 1);

		center_line_group
			.append('circle')
			.attr('cx', 0)
			.attr('cy', -radius + 5)
			.attr('r', 3)
			.attr('fill', '#F94141');

		center_line_group
			.append('path')
			.attr('d', symbol().type(symbolTriangle).size(20))
			.attr('fill', '#F94141')
			.attr('transform', `translate(0,-76)`);

		center_line_group
			.append('text')
			.attr('class', 'center-line-text')
			.attr('x', 0)
			.attr('y', -radius - 4)
			.attr('text-anchor', 'middle')
			.text('กึ่งหนึ่งของสภา')
			.attr('fill', '#F94141');
		// #endregion

		// #region [GOV TEXT]
		const gov_text_group = svg.append('g').attr('class', 'gov-text num-text');

		gov_text_group
			.append('text')
			.attr('x', -radius / 2 + 16)
			.attr('y', -radius / 2 - 2)
			.attr('text-anchor', 'middle')
			.text('ฝ่ายรัฐบาล');

		gov_text_group
			.append('text')
			.attr('class', 'num gov')
			.attr('x', -radius / 2 + 16)
			.attr('y', -radius / 2 + 18)
			.attr('text-anchor', 'middle')
			.text(`${DATA[0].numeric.gov} คน`);
		// #endregion

		// #region [OPP TEXT]
		const opp_text_group = svg.append('g').attr('class', 'opp-text num-text');

		opp_text_group
			.append('text')
			.attr('x', radius / 2 - 16)
			.attr('y', -radius / 2 - 2)
			.attr('text-anchor', 'middle')
			.text('ฝ่ายค้าน');

		opp_text_group
			.append('text')
			.attr('class', 'num opp')
			.attr('x', radius / 2 - 16)
			.attr('y', -radius / 2 + 18)
			.attr('text-anchor', 'middle')
			.text(`${DATA[0].numeric.opp} คน`);
		// #endregion

		// #region [UPDATE FUNCTION]
		update = () => {
			svg
				.select('.arc')
				.selectAll('path')
				.data(DATA[+show_current_data].sections, (d) => d.name)
				.transition()
				.duration(1000)
				.attr('stroke', (d) => d.stroke ?? d.fill)
				.attrTween('d', arcTween);

			svg
				.select('.total')
				.transition()
				.duration(1000)
				.tween('total-text', function (d) {
					const i = interpolate(this.textContent, DATA[+show_current_data].total);
					return function (t) {
						this.textContent = Math.round(i(t));
					};
				});

			svg
				.select('.gov')
				.transition()
				.duration(1000)
				.tween('gov-text', function (d) {
					const i = interpolate(
						+this.textContent.split(' ')[0],
						DATA[+show_current_data].numeric.gov
					);
					return function (t) {
						this.textContent = Math.round(i(t)) + ' คน';
					};
				});

			svg
				.select('.opp')
				.transition()
				.duration(1000)
				.tween('gov-text', function (d) {
					const i = interpolate(
						+this.textContent.split(' ')[0],
						DATA[+show_current_data].numeric.opp
					);
					return function (t) {
						this.textContent = Math.round(i(t)) + ' คน';
					};
				});

			if (show_current_data) {
				svg.select('.fluid-opp-text').node().classList.add('show');
			} else {
				svg.select('.fluid-opp-text').node().classList.remove('show');
			}
		};
		// #endregion
	});

	$: {
		update?.(show_current_data);
	}
</script>

<svg bind:this={el_chart}>
	<style>
		.total-text {
			font-family: 'Kanit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
				Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			font-size: 1.5rem;
			font-weight: 600;
		}

		.total {
			font-size: 2.9rem;
		}

		.center-line-text {
			font-style: italic;
			font-size: 0.5rem;
		}

		.num-text {
			font-size: 0.8rem;
		}

		.num-text > .num {
			font-weight: 700;
			font-size: 1.25em;
		}

		.gov-text {
			fill: #f2f2f2;
		}

		.fluid-opp-text {
			transform: translate(208px, -8px);
			opacity: 0;
			transition: 1s;
		}

		.fluid-opp-text.show {
			transform: translate(224px, -8px);
			opacity: 1;
		}
	</style>
</svg>

<style>
	svg {
		max-height: min(80vh, 90vw); /* O */
	}
</style>
