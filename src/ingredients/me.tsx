import { QuickLinks, QuickLinksProps } from "./quick-link";
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { createSignal, For, onCleanup, onMount } from "solid-js";

export default function Me() {
	const [qlProps, _setqlProps] = createSignal<QuickLinksProps[]>([])

	return (
		<>
			<For each={qlProps()}>
				{(i) =>
					<div class="flex-none hover:flex-1 transition-all duration-500 delay-100">
						<QuickLinks
							{...i}
						/>
					</div>
				}
			</For>
		</>
	);
}
