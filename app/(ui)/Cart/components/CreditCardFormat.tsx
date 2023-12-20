import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import styles from "./cart.module.css";
const PaymentForm = () => {
  const [formData, setFormData] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" rounded-lg">
      <div className={styles.creditCardForm}>
        <Cards
          preview={true}
          cvc={formData.cvc}
          expiry={formData.expiry}
          // focused={formData.focus}
          name={formData.name}
          number={formData.number}
        />

        <form>
          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>
              Card Number:
            </label>
            <input
              type="tel"
              name="number"
              id="number"
              placeholder="Card Number"
              value={formData.number}
              onChange={handleInputChange}
              onFocus={(e) =>
                setFormData({ ...formData, focus: e.target.name })
              }
              className={styles.cardInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={(e) =>
                setFormData({ ...formData, focus: e.target.name })
              }
              className={styles.cardInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="expiry" className={styles.label}>
              MM/YY Expiry:
            </label>
            <input
              type="tel"
              name="expiry"
              id="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleInputChange}
              onFocus={(e) =>
                setFormData({ ...formData, focus: e.target.name })
              }
              className={styles.cardInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cvc" className={styles.label}>
              CVC:
            </label>
            <input
              type="tel"
              name="cvc"
              id="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleInputChange}
              onFocus={(e) =>
                setFormData({ ...formData, focus: e.target.name })
              }
              className={styles.cardInput}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentForm;
