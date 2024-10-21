// uno.config.ts
import {
	defineConfig,
	presetTypography,
	presetUno,
	transformerDirectives,
	transformerCompileClass,
	presetIcons,
} from "unocss";
import presetWind from "@unocss/preset-wind";
import presetRemToPx from "@unocss/preset-rem-to-px";



export default defineConfig({
	transformers: [transformerCompileClass(), transformerDirectives()],
	presets: [
		// presetAttributify(), // required when using attributify mode
		presetUno(), // required
		presetIcons()
	],
});
