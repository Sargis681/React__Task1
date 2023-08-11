import { Suspense } from "react";
import "./App.css";
import AllLists from "./components/AllLists/AllLists";

import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    <Suspense>
      <div className="container">
        {/* <Route path="/" element={<Layout />}> */}
        {/* <Route index  /> */}
        {/* <Header /> */}
        {/* <AllLists /> */}
        {/* </Route> */}
        <LoginPage />
      </div>
    </Suspense>
  );
}

export default App;
