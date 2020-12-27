import React from "react";
import { BrowserRouter } from "react-router-dom";

import { MarketingApp, Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
