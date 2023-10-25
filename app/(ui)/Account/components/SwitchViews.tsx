import React from "react";
import CardInfo from "./CardInfo";
import AddressView from "./addressForm";
import UserInfo from "./userInfo";

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
      ) : null}
    </div>
  );
};

export default SwitchViews;
