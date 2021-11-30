import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";
import Svg1 from "../Svgs/svg1";
import Svg2 from "../Svgs/Svg2";
import "./Credit.css";

const Credit = () => {
  const { pageState, personState } = useContext(ApplicationContext);
  const [page, setPage] = pageState;
  const [person, setPerson] = personState;
  const {
    firstName,
    lastName,
    fieldOne,
    fieldTwo,
    fieldThree,
    fieldFour,
    cvv2,
    year,
    month,
    wallet,
  } = person;

  console.log("ALI ZIAAAAAAAA: ", person);
  return (
    <div className="creditContainer">
      <div className="credit">
        <div className="row-1">
          <Svg1 />
          <Svg2 />
        </div>
        <div className="row-2">
          <p>
            {fieldOne} **** **** {fieldFour}
          </p>
        </div>
        <p className="CCV2">CVV2: {cvv2}</p>
        <div className="row-3">
          <p>
            {firstName} {lastName}
          </p>
          <div>
            <p className="date">Expiry Date</p>
            <p>
              {year}/{month}
            </p>
          </div>
        </div>
      </div>

      <div className="btnContainer">
        <button className="btn" onClick={() => setPage(2)}>
          انتقال وجه
        </button>
      </div>
    </div>
  );
};
export default Credit;
