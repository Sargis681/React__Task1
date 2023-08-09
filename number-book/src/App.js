import "./App.css";
import AllLists from "./components/AllLists/AllLists";
import Header from "./components/Header/Header";
// import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <div className="container">
      <Header />
      <AllLists />
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
