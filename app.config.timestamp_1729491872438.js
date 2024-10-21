// app.config.ts
import { defineConfig } from "@solidjs/start/config";
import UnoCSS from "unocss/vite";
import remarkFrontmatter from "remark-frontmatter";
import rehypeRaw from "rehype-raw";
import { nodeTypes } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import remarkMath from "remark-math";
import rehypeTypst from "@myriaddreamin/rehype-typst";
import remarkABCJS from "remark-abcjs";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight
} from "@shikijs/transformers";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import pkg from "@vinxi/plugin-mdx";
var { default: mdx } = pkg;
var app_config_default = defineConfig({
  extensions: ["mdx", "md", "tsx"],
  vite: {
    plugins: [
      UnoCSS(),
      mdx.withImports({})({
        define: {
          "import.meta.env": `'import.meta.env'`
        },
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [
          [
            rehypeRaw,
            {
              passThrough: nodeTypes
            }
          ],
          [rehypeSlug],
          [
            rehypeAutoLinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: "heading"
              }
            }
          ],
          rehypeTypst,
          [rehypeShiki, {
            inline: "tailing-curly-colon",
            theme: "vitesse-light",
            transformers: [
              transformerNotationFocus(),
              transformerNotationDiff(),
              transformerNotationHighlight(),
              transformerNotationErrorLevel(),
              transformerNotationWordHighlight()
            ]
          }]
        ],
        remarkPlugins: [
          remarkGfm,
          remarkMath,
          remarkABCJS,
          remarkFrontmatter
        ]
      }),
      { enforce: "pre" }
    ]
  },
  server: {
    preset: "vercel-edge",
    prerender: {
      crawlLinks: true,
      autoSubfolderIndex: false,
      failOnError: true,
      ignore: [/\{\getPath}/, /.*?emojiSvg\(.*/]
    }
  }
});
export {
  app_config_default as default
};
