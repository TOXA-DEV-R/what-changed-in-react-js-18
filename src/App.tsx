/** @format */

import { FC, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import Prodact from "./Prodact";

const App: FC = () => {
  return (
    <main className="main">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Prodact />
      </Suspense>
    </main>
  );
};

export default App;
