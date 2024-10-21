import { lazy, Suspense } from "solid-js";
import {
	Match,
	type ParentProps,
	Switch,
	createEffect,
	createSignal,
} from "solid-js";
import { useLocation } from "@solidjs/router";
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

	return (

		<QuickLinks title="" icon={<div />} href="" />

	);
}
