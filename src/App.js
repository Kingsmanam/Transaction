import { useContext } from "react";
import "./App.css";
import Credit from "./Components/Credit";
import Fields from "./Components/Fields";
import Receipt from "./Components/Receipt";
import Transaction from "./Components/Transaction";
import { ApplicationContext } from "./context/ApplicationContext";

function App() {
  const { pageState } = useContext(ApplicationContext);
  const [page, setPage] = pageState;
  return (
    <div className="App">
      {page === 0 ? (
        <Fields />
      ) : page === 1 ? (
        <Credit />
      ) : page === 2 ? (
        <Transaction />
      ) : page === 3 ? (
        <Receipt />
      ) : null}
    </div>
  );
}

export default App;
