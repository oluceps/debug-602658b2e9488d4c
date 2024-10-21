import { Show, type Component } from "solid-js";
import { useWindowScrollPosition } from "@solid-primitives/scroll";
import { useLenis } from "lenis-solid";
const ScrollTopBtn: Component = () => {
	const scroll = useWindowScrollPosition();
	return (
		<div class="i-ci-chevron-big-up" />
	);
};

export default ScrollTopBtn;
