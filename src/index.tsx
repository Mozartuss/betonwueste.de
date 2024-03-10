import React from "react";
import "./i18n/i18n";
import "./index.css";
import "./style/fonts/LiberationMono-Bold-webfont.woff";
import "./style/fonts/LiberationMono-BoldItalic-webfont.woff";
import "./style/fonts/LiberationMono-Italic-webfont.woff";
import "./style/fonts/LiberationMono-Regular-webfont.woff";

import App from "./App";
import { createRoot, Root } from "react-dom/client";

const root: Root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <React.Suspense fallback={"Loading..."}>
        <App />
    </React.Suspense>
);
