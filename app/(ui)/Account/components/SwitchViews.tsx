import React from "react";
import CardInfo from "./CardInfo";
import AddressView from "./addressForm";
import UserInfo from "./userInfo";
import Terms from "./terms";

const SwitchViews = ({ value }: { value: string }) => {
  console.log(value);

  return (
    <div>
      {value === "Profile" ? (
        <UserInfo />
      ) : value === "Card" ? (
        <CardInfo />
      ) : value === "Address" ? (
        <AddressView />
      ) : value === "Terms" ? (
        <Terms />
      ) : null}
    </div>
  );
};

export default SwitchViews;
