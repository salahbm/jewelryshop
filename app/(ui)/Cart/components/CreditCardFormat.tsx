import { useState } from "react";
import styles from "./cart.module.css";
const CreditCardForm: React.FC = () => {
  const [cardNumber, setCardNumber] = useState<string[]>(["", "", "", ""]);
  const [cardHolder, setCardHolder] = useState<string>("");
  const [expirationMonth, setExpirationMonth] = useState<string>("");
  const [expirationYear, setExpirationYear] = useState<string>("");
  const [ccv, setCcv] = useState<string>("");

  const handleCardNumberChange = (index: number, value: string) => {
    const newCardNumber = [...cardNumber];
    newCardNumber[index] = value;
    setCardNumber(newCardNumber);

    if (value.length === 4 && index < 3) {
      const nextInput = document.getElementById(`card-number-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleCardHolderChange = (value: string) => {
    setCardHolder(value);
  };

  const handleExpirationMonthChange = (value: string) => {
    setExpirationMonth(value);
  };

  const handleExpirationYearChange = (value: string) => {
    setExpirationYear(value);
  };

  const handleCcvChange = (value: string) => {
    setCcv(value);
  };

  return (
    <div className={styles.checkout}>
      <div className={styles["credit-card-box"]}>
        <div className={styles.flip}>
          <div className={styles.front}>
            <div className={styles.chip}></div>
            <div className={styles.logo}>
              <svg
                version="1.1"
                id="visa"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="47.834px"
                height="47.834px"
                viewBox="0 0 47.834 47.834"
              >
                {/* ... SVG Path Data ... */}
              </svg>
            </div>
            <div className={styles.number}>
              {cardNumber.map((num, index) => (
                <span key={index}>{num}</span>
              ))}
            </div>
            {/* ... Rest of the front side of the card ... */}
          </div>
          <div className={styles.back}>
            {/* ... Back side of the card ... */}
          </div>
        </div>
      </div>
      <form className={styles.form} autoComplete="off" noValidate>
        <fieldset>
          <label htmlFor="card-number">Card Number</label>
          {cardNumber.map((_, index) => (
            <input
              type="text"
              id={`card-number-${index}`}
              className={styles["input-cart-number"]}
              maxLength={4}
              key={index}
              value={cardNumber[index]}
              onChange={(e) => handleCardNumberChange(index, e.target.value)}
            />
          ))}
        </fieldset>
        <fieldset>
          <label htmlFor="card-holder">Card holder</label>
          <input
            type="text"
            id="card-holder"
            className={styles["input-card-holder"]}
            value={cardHolder}
            onChange={(e) => handleCardHolderChange(e.target.value)}
          />
        </fieldset>
        {/* ... Rest of the form fields ... */}
        <button className={styles.btn}>
          <i className="fa fa-lock"></i> submit
        </button>
      </form>
    </div>
  );
};

export default CreditCardForm;
