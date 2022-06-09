/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SWRConfig } from "swr";

const DOC = document.getElementById("root");
const root = ReactDOM.createRoot(DOC!);

root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: (...args: any) =>
          fetch(args).then((res: Response) => res.json()),
        suspense: true,
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);
