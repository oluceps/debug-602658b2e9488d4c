import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, lazy } from "solid-js";
import "virtual:uno.css";
// REMOVE this line pass compile
const BackTopBtn = lazy(() => import("./BackTopBtn"));
// REMOVE this line pass compile
import { QuickLinks } from "~/quick-link";
import { HttpStatusCode } from "@solidjs/start";

export default function App() {
	return (
		<Router
			root={() => (
				<main>
					<ErrorBoundary
						fallback={() =>
							<div>
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
