import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, lazy } from "solid-js";
import "virtual:uno.css";
const BackTopBtn = lazy(() => import("./BackTopBtn"));
import { QuickLinks } from "~/quick-link";
import { HttpStatusCode } from "@solidjs/start";

export default function App() {
	return (
		<Router
			root={() => (
				<main>
					<ErrorBoundary
						fallback={() =>
							<div class="flex flex-col w-full items-center justify-center h-full grow text-lg text-red-400 leading-none">
								<HttpStatusCode code={404} />
								／|、
								<br />
								(˙、．7
								<br />
								|、～ヽ
								<br />
								じしf_,)ノ
								<br />
								Page Not Found
							</div>
						}
					>
						<QuickLinks />
					</ErrorBoundary>
				</main>
			)}
		>
			<FileRoutes />
		</Router>
	);
}
