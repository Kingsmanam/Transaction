import "./Transaction.css";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

const Transaction = () => {
  const { destCardState, transferPriceState, pageState, personState } =
    useContext(ApplicationContext);
  const [destCard, setDestCard] = destCardState;
  const [transferPrice, setTransferPrice] = transferPriceState;
  const [page, setPage] = pageState;
  const [person, setPerson] = personState;

  return (
    <div className="container">
      <div className="fieldContainer">
        <label className="fieldTitle">شماره کارت مقصد</label>
        <input
          className="field card"
          onChange={(e) => setDestCard(e.target.value)}
        />
        <label className="fieldTitle">مبلغ انتقال</label>
        <input
          className="field amount"
          onChange={(e) => setTransferPrice(e.target.value)}
        />
      </div>
      <button className="btn" onClick={() => setPage(3)}>
        انتقال
      </button>
    </div>
  );
};

export default Transaction;
