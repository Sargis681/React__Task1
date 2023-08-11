// import { Suspense } from "react";
// import "./App.css";
// import { Route } from "react-router-dom"; // Import Route from react-router-dom
// import Layout from "./components/Layout";

// function App() {
//   return (
//     <div className="container">
//       <Suspense fallback={<div>Loading...</div>}>
//         <Route path="/two" element={<Layout />} />{" "}
//         {/* Use element instead of index */}
//       </Suspense>
//     </div>
//   );
// }

// export default App;

import { Suspense } from "react";
import "./App.css";
import AllLists from "./components/AllLists/AllLists";

import Header from "./components/Header/Header";
import LoginPage from "./components/LoginPage/LoginPage";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";

function App() {
  return (
    // <Suspense>
    <div className="container">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/two" element={<LoginPage />} />
        {/* <Route path="/two" element={<Layout />}> */}
        {/* <Route index /> */}
        {/* <Header /> */}
        {/* </Route> */}
      </Routes>
      {/* <LoginPage /> */}
    </div>
    // </Suspense>
  );
}

export default App;
