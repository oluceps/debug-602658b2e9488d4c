import { cache, createAsync, useNavigate } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import { Motion, Presence } from "solid-motionone";
import { useLocation } from "@solidjs/router";
import { twMerge } from "tailwind-merge";

export default function Home() {

	// if (limit()) {
	// 	menu.splice(0, 1);
	// }

	const navigate = useNavigate();

	type TabRef = HTMLButtonElement | null;
	const [tabRefs] = createSignal<TabRef[]>([]);

	const [hoveredIdx, setHoveredIdx] = createSignal<number | null>(null);
	const [hoveredTab, setHoveredTab] = createSignal<DOMRect | undefined>(
		tabRefs()[hoveredIdx() ?? -1]?.getBoundingClientRect(),
	);

	createEffect(() => {
		setHoveredTab(tabRefs()[hoveredIdx() ?? -1]?.getBoundingClientRect());
	});

	return (
		<nav
			onmouseleave={() => {
				setHoveredIdx(null);
			}}
			class={`bg-background flex items-center justify-end relative px-2 py-1.5`}
		>
			{hoveredTab() ? (
				<Presence>
					<Motion.button
						class="absolute top-0 right-0 bg-sprout-200/90 rounded-md"
						initial={{
							top: hoveredTab()?.bottom! - 24 + "px",
							right:
								document.documentElement.clientWidth -
								(hoveredTab()?.right || 0) +
								"px",
							width: hoveredTab()?.width + "px",
							height: hoveredTab()?.height + "px",
							opacity: 0,
						}}
						animate={{
							top: hoveredTab()?.top + "px",
							right:
								document.documentElement.clientWidth -
								(hoveredTab()?.right || 0) +
								"px",
							width: hoveredTab()?.width + "px",
							height: hoveredTab()?.height + "px",
							opacity: 1,
						}}
						transition={{
							duration: 0.18,
						}}
					/>
				</Presence>
			) : null}
		</nav>
	);
}
