import React from "react";

import { FcSimCardChip } from "react-icons/fc";
import { SiVisa } from "react-icons/si";

import {
  __Card,
  Card__Widget,
  Card__Container,
  Card__Top,
  Card__Middle,
  Card__Bottom,
} from "../../styles/Credizest/Cards/Card";

const Card = () => {
  return (
    <__Card>
      <Card__Widget>
        <Card__Container>
          <Card__Top>
            <div className="Qr__Reader">
              <FcSimCardChip style={{ fontSize: "3em" }} />
            </div>
            <div className="Card__Logo">
              <SiVisa style={{ fontSize: "4em" }} />
            </div>
          </Card__Top>
          <Card__Middle>
            <div className="Card__Number">
              <h2>2536 4846 7464 4764 7676</h2>
            </div>
          </Card__Middle>
          <Card__Bottom>
            <div className="User_column">
              <div className="Qr__Reader">
                <h3>Card Holder</h3>
              </div>
              <div className="Card__Logo">
                <h3>Expires</h3>
              </div>
            </div>
            <div className="User_column">
              <div className="User__FullName">
                <h3>Taiwo Boluwatife Jeremiah</h3>
              </div>
              <div className="Expiry__date">
                <h3>11/27</h3>
              </div>
            </div>
          </Card__Bottom>
        </Card__Container>
      </Card__Widget>
    </__Card>
  );
};

export default Card;
