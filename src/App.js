import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState(0)
  return (
    //insert ur changes in the main div "App"
    <div className="tocenter">
      <p>
        نام: <input maxlength="20" className="textInput1" />
      </p>
      <p>
        نام خانوادگی: <input maxlength="25" className="textInput234" />
      </p>
      <div>
        شماره کارت:{" "}
        <input
          style={{ marginRight: 20 }}
          maxlength="4"
          className="cardSections"
        />
        <input maxlength="4" className="cardSections" />
        <input maxlength="4" className="cardSections" />
        <input maxlength="4" className="cardSections" />
      </div>
      <p>
        موجودی:{" "}
        <input
          maxlength="13"
          style={{ marginRight: 43 }}
          className="textInput234"
        />
      </p>
      <p>
        cvv2:{" "}
        <input
          maxlength="4"
          className="textInput5 "
          style={{ marginRight: 67 }}
        />
      </p>
      <div>
        تاریخ:
        <input
          style={{ marginRight: 70 }}
          maxlength="2"
          placeholder="ماه"
          className="textInput6"
        />
        <input maxlength="2" placeholder="سال" className="textInput6" />
      </div>
    </div>
  );
}

export default App;
