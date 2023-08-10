import "./App.css";
import AllLists from "./components/AllLists/AllLists";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <AllLists />
    </div>
  );
}

export default App;
