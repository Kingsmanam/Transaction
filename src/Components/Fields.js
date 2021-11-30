import "./Fields.css";
import { ApplicationContext } from "../context/ApplicationContext";
import { useContext } from "react";

const Fields = () => {
  const { pageState, personState } = useContext(ApplicationContext);
  const [page, setPage] = pageState;
  const [person, setPerson] = personState;

  console.log("person: ", person);

  return (
    <div className="tocenter">
      <p>
        <input
          maxlength="20"
          className="textInput1"
          onChange={(e) => setPerson({ ...person, firstName: e.target.value })}
        />
        نام
      </p>
      <p>
        <input
          maxlength="25"
          className="textInput234"
          onChange={(e) => setPerson({ ...person, lastName: e.target.value })}
        />
        نام خانوادگی
      </p>
      <div>
        <input
          maxlength="4"
          className="cardSections"
          onChange={(e) =>
            setPerson({
              ...person,
              fieldOne: e.target.value,
            })
          }
        />
        <input
          maxlength="4"
          className="cardSections"
          onChange={(e) =>
            setPerson({
              ...person,
              fieldTwo: e.target.value,
            })
          }
        />
        <input
          maxlength="4"
          className="cardSections"
          onChange={(e) =>
            setPerson({
              ...person,
              fieldThree: e.target.value,
            })
          }
        />
        <input
          maxlength="4"
          className="cardSections"
          onChange={(e) =>
            setPerson({
              ...person,
              fieldFour: e.target.value,
            })
          }
        />
        شماره کارت
      </div>
      <p>
        <input
          maxlength="13"
          style={{ marginRight: 43 }}
          className="textInput234"
          onChange={(e) => setPerson({ ...person, wallet: e.target.value })}
        />
        موجودی
      </p>
      <p>
        <input
          maxlength="4"
          className="textInput5 "
          style={{ marginRight: 67 }}
          onChange={(e) => setPerson({ ...person, cvv2: e.target.value })}
        />
        cvv2
      </p>
      <div>
        <input
          // type="number"
          // pattern="\d*"
          style={{ marginRight: 70 }}
          maxlength="2"
          placeholder="ماه"
          className="textInput6"
          onChange={(e) => setPerson({ ...person, month: e.target.value })}
        />
        <input
          maxLength="2"
          placeholder="سال"
          className="textInput6"
          onChange={(e) => setPerson({ ...person, year: e.target.value })}
        />
        تاریخ
      </div>
      <button onClick={() => setPage(1)}>تایید</button>
    </div>
  );
};

export default Fields;
