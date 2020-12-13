<template>
	<svg
		role="img"
		aria-labelledby="loading-aria"
		viewBox="0 0 200 250"
		preserveAspectRatio="none"
	>
		<title id="loading-aria">Loading...</title>
		<rect
			x="0"
			y="0"
			width="100%"
			height="100%"
			clip-path="url(#clip-path)"
			style='fill: url("#fill");'
		></rect>
		<defs>
			<clipPath id="clip-path">
				<rect
					x="0"
					y="-6"
					rx="0"
					ry="0"
					width="217"
					height="211"
				/>
				<rect
					x="83"
					y="96"
					rx="0"
					ry="0"
					width="8"
					height="39"
				/>
				<rect
					x="12"
					y="217"
					rx="0"
					ry="0"
					width="169"
					height="16"
				/>
				<rect
					x="175"
					y="223"
					rx="0"
					ry="0"
					width="1"
					height="1"
				/>
			</clipPath>
			<linearGradient id="fill">
				<stop
					offset="0.599964"
					stop-color="#f3f3f3"
					stop-opacity="1"
				>
					<animate
						attributeName="offset"
						values="-2; -2; 1"
						keyTimes="0; 0.25; 1"
						dur="2s"
						repeatCount="indefinite"
					></animate>
				</stop>
				<stop
					offset="1.59996"
					stop-color="#ecebeb"
					stop-opacity="1"
				>
					<animate
						attributeName="offset"
						values="-1; -1; 2"
						keyTimes="0; 0.25; 1"
						dur="2s"
						repeatCount="indefinite"
					></animate>
				</stop>
				<stop
					offset="2.59996"
					stop-color="#f3f3f3"
					stop-opacity="1"
				>
					<animate
						attributeName="offset"
						values="0; 0; 3"
						keyTimes="0; 0.25; 1"
						dur="2s"
						repeatCount="indefinite"
					></animate>
				</stop>
			</linearGradient>
		</defs>
	</svg>
</template>

<script>
// import { ContentLoader } from "vue-content-loader"

export default {
	// components: { ContentLoader }
}
</script>