import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, lazy } from "solid-js";
import NotFound from "./components/NotFound";
import "virtual:uno.css";
const BackTopBtn = lazy(() => import("./components/BackTopBtn"));
import { QuickLinks } from "~/ingredients/quick-link";

export default function App() {
	return (
		<Router
			root={() => (
				<main>
					<ErrorBoundary
						fallback={() =>
							<NotFound />
						}
					>
						<QuickLinks title="" icon={<div />} href="" />
					</ErrorBoundary>
				</main>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
