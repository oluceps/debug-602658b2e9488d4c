import cfg from "../constant";
import { QuickLinks, QuickLinksProps } from "./quick-link";
import { Link, Meta, MetaProvider, Title } from "@solidjs/meta";
import { createSignal, For, onCleanup, onMount } from "solid-js";

export default function Me() {
	const [qlProps, _setqlProps] = createSignal<QuickLinksProps[]>([])

	return (
		<>
			<div class="h-full grow flex flex-col justify-center w-11/12 md:w-3/5 xl:w-2/5">
				<For each={qlProps()}>
					{(i) =>
						<div class="flex-none hover:flex-1 transition-all duration-500 delay-100">
							<QuickLinks
								{...i}
							/>
						</div>
					}
				</For>
			</div >
		</>
	);
}
