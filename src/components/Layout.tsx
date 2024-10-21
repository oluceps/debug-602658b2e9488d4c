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

	return (

		<QuickLinks title="" icon={<div />} href="" />

	);
}
