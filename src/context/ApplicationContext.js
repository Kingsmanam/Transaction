import { createContext, useState } from "react";

export const ApplicationContext = createContext();

const ApplicationProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    fieldOne: 0,
    fieldTwo: 0,
    fieldThree: 0,
    fieldFour: 0,
    wallet: 0,
    cvv2: 0,
    year: 0,
    month: 0,
  });
  const [destCard, setDestCard] = useState(0);
  const [transferPrice, setTransferPrice] = useState(0);

  return (
    <ApplicationContext.Provider
      value={{
        pageState: [page, setPage],
        personState: [person, setPerson],
        destCardState: [destCard, setDestCard],
        transferPriceState: [transferPrice, setTransferPrice],
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

export default ApplicationProvider;
