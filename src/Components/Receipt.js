import { FcCheckmark } from "react-icons/fc";
import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationContext";

const Receipt = () => {
  const { destCardState, transferPriceState, personState } =
    useContext(ApplicationContext);
  const [destCard, setDestCard] = destCardState;
  const [transferPrice, setTransferPrice] = transferPriceState;
  const [person, setPerson] = personState;

  const { fieldOne, fieldTwo, fieldThree, fieldFour } = person;

  return (
    <div className="container">
      <p>تراکنش شما با موفقیت انجام شد</p>
      <p>
        {fieldOne} **** **** {fieldFour}
      </p>
      <p>{destCard}</p>
      <FcCheckmark style={{ fontSize: "3rem" }} />
    </div>
  );
};

export default Receipt;
