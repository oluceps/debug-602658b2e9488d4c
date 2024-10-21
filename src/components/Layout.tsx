import { lazy } from "solid-js";

const BackTopBtn = lazy(() => import("./BackTopBtn"));
import { QuickLinks } from "~/ingredients/quick-link";


export function Layout() {

	return (
		<QuickLinks title="" icon={<div />} href="" />
	);
}
