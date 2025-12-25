import { f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import "./chakra-ui-3tUd-FUe.js";
import { O as ChakraProvider, Q as require_jsx_runtime } from "./react-core-DvpziYFk.js";
import { b as ScheduleTables, e as ScheduleProvider } from "./schedule-table-B3jhmuBq.js";
import "./dnd-kit-B7m6WuA7.js";
import { b as require_client } from "./react-dom-Mqi_vPhy.js";

//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();

//#endregion
//#region src/App.tsx
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChakraProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleTables, {}) }) }) });
}
var App_default = App;

//#endregion
//#region src/main.tsx
var import_client = /* @__PURE__ */ __toESM(require_client());
(0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(App_default, {}));

//#endregion