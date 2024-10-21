import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary } from "solid-js";
import NotFound from "./components/NotFound";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

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
						<div />
					</ErrorBoundary>
				</main>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
