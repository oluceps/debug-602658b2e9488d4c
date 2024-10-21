import { Link, Meta, MetaProvider } from "@solidjs/meta";
import { lazy, Suspense } from "solid-js";
import {
	Match,
	type ParentProps,
	Switch,
	createEffect,
	createSignal,
} from "solid-js";
import { SolidLenis } from "lenis-solid";
import { useLocation } from "@solidjs/router";
import Root from "./Root";
import { PageStateProvider, TaxoStateProvider } from "./PageState";
import Me from "~/ingredients/me";
import Footer from "./Footer";
import { QuickLinks } from "~/ingredients/quick-link";

const BackTopBtn = lazy(() => import("./BackTopBtn"));
const Header = lazy(() => import("./Header"));

export function Layout(props: ParentProps) {
	const location = useLocation();
	const [currentPath, setCurrentPath] = createSignal(location.pathname);

	createEffect(() => {
		setCurrentPath(location.pathname);
	});

	const isRoot = () => currentPath() === "/";
	const isTaxo = () => currentPath().replaceAll("/", "") === "taxonomy";
	// const isMe = () => currentPath().replaceAll("/", "") === "me";

	return (
		<MetaProvider>
			<PageStateProvider>
				<TaxoStateProvider>
					<div>
						<div class="flex flex-col bg-zinc-50 dark:bg-[#171717] min-h-screen items-center">
							<Switch
								fallback={
									<div class="flex flex-col flex-1 grow pb-12 w-11/12 md:w-full">
									</div>
								}
							>
								<Match when={isRoot()}>
									<QuickLinks title="" icon={<div />} href="" />
								</Match>
							</Switch>

							<Footer />
						</div>
					</div>
					<Suspense>
						<BackTopBtn />
					</Suspense>
				</TaxoStateProvider>
			</PageStateProvider>
		</MetaProvider>
	);
}
