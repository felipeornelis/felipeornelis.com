<script lang="ts" context="module">
	let componentInstance = 0;
</script>

<script lang="ts">
	export let size: number;
	export let white: boolean = false;

	let topStopColor = '#EB608C';
	let bottomStopColor = '#35B7FD';

	if (white) {
		topStopColor = '#ffffff';
		bottomStopColor = '#ffffff';
	}

	const svgPathId = `paint0_linear_107_61_${componentInstance}`;
	componentInstance++;
</script>

<svg
	width={size}
	height={size + 4}
	viewBox="0 0 50 54"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	data-white={white}
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M32.5752 0L26.2035 25.2478H49.2212L15.8496 54L22.2212 28.4336H0L32.5752 0ZM26.9203 9.07964L8.44247 25.2478H22.8584L26.9203 9.07964ZM40.6195 28.4336H25.4071L21.3451 45.0796L40.6195 28.4336Z"
		fill="url(#{svgPathId})"
	/>
	<defs>
		<linearGradient id={svgPathId} x1="17" y1="8" x2="68" y2="40.5" gradientUnits="userSpaceOnUse">
			<stop stop-color={topStopColor} />
			<stop offset="0.71875" stop-color={bottomStopColor} />
		</linearGradient>
	</defs>
</svg>
