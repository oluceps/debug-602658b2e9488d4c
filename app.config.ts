import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";


// @ts-expect-error missing types
import pkg from "@vinxi/plugin-mdx";

const { default: mdx } = pkg;


export default defineConfig({
	extensions: ["mdx", "md", "tsx"],
	vite: {
		plugins: [
			UnoCSS(),
			mdx.withImports({})({
				define: {
					"import.meta.env": `'import.meta.env'`,
				},

				jsx: true,
				jsxImportSource: "solid-js",
				providerImportSource: "solid-mdx",
			}),
			{ enforce: "pre" },
		],
	},
	server: {
		preset: "vercel-edge",
		prerender: {
			crawlLinks: true,
			autoSubfolderIndex: false,
			failOnError: true,
			ignore: [/\{\getPath}/, /.*?emojiSvg\(.*/],
		},
	},
});
