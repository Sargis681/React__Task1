import "./App.css";
import AllLists from "./components/AllLists/AllLists";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AllLists />
      </div>
      <Pagination />
    </>
  );
}

export default App;
