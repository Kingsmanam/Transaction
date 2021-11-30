import Svg1 from "../Svgs/svg1";
import Svg2 from "../Svgs/Svg2";
import "./Credit.css"

const Credit = () => {
    return (
      <div className="container">
        <div className="credit">
          <div className="row-1">
            <Svg1 />
            <Svg2 />
          </div>
          <div className="row-2">
          <p>7393 **** **** ****</p>
          </div>
          <p className="CCV2">CVV2: 466</p>
          <div className="row-3">
            <p>Alireza Mansouri</p>
            <div>
              <p className="date">Expiry Date</p>
              <p>07/05</p>
            </div>
          </div>
        </div>
      </div>
    )
};
export default Credit;