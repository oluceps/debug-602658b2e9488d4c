import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary } from "solid-js";
import "./style.css";
// import { Layout } from "./components/Layout";
import IErr from "./components/IErr";
import NotFound from "./components/NotFound";
import "virtual:uno.css";
import "@unocss/reset/tailwind-compat.css";

export default function App() {
	return (
		<Router
			root={() => (
				<main>
					<ErrorBoundary
						fallback={(e) =>
							<NotFound />
							// <IErr>{e.message}</IErr>
							// <div />
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
