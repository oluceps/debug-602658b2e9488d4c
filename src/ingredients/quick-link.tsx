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


	return (
		<div/>
	);
};
