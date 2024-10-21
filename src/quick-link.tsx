import { createMemo, createSignal, type JSXElement, onCleanup, type ParentComponent, Show } from "solid-js";

import { Dynamic } from "solid-js/web";
import { twMerge } from "tailwind-merge";

export const isExternalURL = (url: string) =>
	url.startsWith("https:") || url.startsWith("mailto:");

export type QuickLinksProps = {
	title: string;
	href: string;
	icon: JSXElement;
	description?: string;
	children?: JSXElement;
	onlyIcon?: boolean;
};


export const QuickLinks: ParentComponent<QuickLinksProps> = (props) => {
	// const handleMouseLeave = () => {
	// 	clearTimeout(timeoutId);
	// 	setIsRelative(false);
	// 	clearTimeout(intervalId);
	// 	setInnerW(0);
	// };

	// const innerWText = createMemo(() => `w-[${innerW()}%]`);

	// onCleanup(() => clearTimeout(timeoutId));

	// <a href={props.href} target="_blank">
	// 	<span class="absolute -inset-px rounded-xl" />
	// </a>
	return (
		<div/>
	);
};
