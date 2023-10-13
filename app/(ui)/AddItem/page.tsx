"use client";
import { JewelryItem } from "@/types/Item";
import { ChangeEvent, useState } from "react";

const AddJewelryItem: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    images: [],
    metalType: "",
    gemstones: [],
    jewelrySize: [],
    chainLength: "",
    weight: 0,
    style: "",
    closureType: "",
    packaging: "",
    careInstructions: "",
    certifications: [],
    customizationOptions: [],
    shippingInfo: {
      methods: [],
      deliveryTimes: [],
      costs: [],
    },
    returnsPolicy: {
      description: "",
      timeFrame: "",
      restockingFee: 0,
    },
    reviews: [],
    relatedProducts: [],
    contactInfo: {
      email: "",
      phone: "",
    },
    paymentOptions: [],
    securityAndPrivacyInfo: "",
    termsAndConditionsLink: "",
    warrantyInfo: "",
    availability: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Send the formData object to your backend for storage
    // You would typically make an API request to your server here

    // After successful submission, you can redirect the user or show a success message
  };

  function handleInputChangeForNestedField(
    arg0: string,
    e: ChangeEvent<HTMLInputElement>
  ): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div>
      <h1>Add New Jewelry Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="metalType">Metal Type</label>
          <input
            type="text"
            id="metalType"
            name="metalType"
            value={formData.metalType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="gemstones">Gemstones</label>
          <input
            type="text"
            id="gemstones"
            name="gemstones"
            value={formData.gemstones}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="jewelrySize">Jewelry Size</label>
          <input
            type="text"
            id="jewelrySize"
            name="jewelrySize"
            value={formData.jewelrySize}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="chainLength">Chain Length</label>
          <input
            type="text"
            id="chainLength"
            name="chainLength"
            value={formData.chainLength}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="weight">Weight</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="style">Style</label>
          <input
            type="text"
            id="style"
            name="style"
            value={formData.style}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="closureType">Closure Type</label>
          <input
            type="text"
            id="closureType"
            name="closureType"
            value={formData.closureType}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="packaging">Packaging</label>
          <input
            type="text"
            id="packaging"
            name="packaging"
            value={formData.packaging}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="careInstructions">Care Instructions</label>
          <textarea
            id="careInstructions"
            name="careInstructions"
            value={formData.careInstructions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="certifications">Certifications</label>
          <input
            type="text"
            id="certifications"
            name="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="customizationOptions">Customization Options</label>
          <input
            type="text"
            id="customizationOptions"
            name="customizationOptions"
            value={formData.customizationOptions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="shippingMethods">Shipping Methods</label>
          <input
            type="text"
            id="shippingMethods"
            name="shippingMethods"
            value={formData.shippingInfo.methods}
            onChange={(e) =>
              handleInputChangeForNestedField("shippingInfo.methods", e)
            }
          />
        </div>
        <div>
          <label htmlFor="deliveryTimes">Delivery Times</label>
          <input
            type="text"
            id="deliveryTimes"
            name="deliveryTimes"
            value={formData.shippingInfo.deliveryTimes}
            onChange={(e) =>
              handleInputChangeForNestedField("shippingInfo.deliveryTimes", e)
            }
          />
        </div>
        <div>
          <label htmlFor="shippingCosts">Shipping Costs</label>
          <input
            type="text"
            id="shippingCosts"
            name="shippingCosts"
            value={formData.shippingInfo.costs}
            onChange={(e) =>
              handleInputChangeForNestedField("shippingInfo.costs", e)
            }
          />
        </div>
        <div>
          <label htmlFor="returnsDescription">Returns Description</label>
          <textarea
            id="returnsDescription"
            name="returnsDescription"
            value={formData.returnsPolicy.description}
            onChange={(e: any) =>
              handleInputChangeForNestedField("returnsPolicy.description", e)
            }
          />
        </div>
        <div>
          <label htmlFor="returnsTimeFrame">Returns TimeFrame</label>
          <input
            type="text"
            id="returnsTimeFrame"
            name="returnsTimeFrame"
            value={formData.returnsPolicy.timeFrame}
            onChange={(e) =>
              handleInputChangeForNestedField("returnsPolicy.timeFrame", e)
            }
          />
        </div>
        <div>
          <label htmlFor="restockingFee">Restoring Fee</label>
          <input
            type="number"
            id="restockingFee"
            name="restockingFee"
            value={formData.returnsPolicy.restockingFee}
            onChange={(e) =>
              handleInputChangeForNestedField("returnsPolicy.restockingFee", e)
            }
          />
        </div>
        <div>
          <label htmlFor="contactEmail">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={formData.contactInfo.email}
            onChange={(e) =>
              handleInputChangeForNestedField("contactInfo.email", e)
            }
          />
        </div>
        <div>
          <label htmlFor="contactPhone">Contact Phone</label>
          <input
            type="tel"
            id="contactPhone"
            name="contactPhone"
            value={formData.contactInfo.phone}
            onChange={(e) =>
              handleInputChangeForNestedField("contactInfo.phone", e)
            }
          />
        </div>
        <div>
          <label htmlFor="paymentMethods">Payment Methods</label>
          <input
            type="text"
            id="paymentMethods"
            name="paymentMethods"
            value={formData.paymentOptions}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="securityAndPrivacyInfo">
            Security and Privacy Info
          </label>
          <textarea
            id="securityAndPrivacyInfo"
            name="securityAndPrivacyInfo"
            value={formData.securityAndPrivacyInfo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="termsAndConditionsLink">
            Terms and Conditions Link
          </label>
          <input
            type="url"
            id="termsAndConditionsLink"
            name="termsAndConditionsLink"
            value={formData.termsAndConditionsLink}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="warrantyInfo">Warranty Info</label>
          <input
            type="text"
            id="warrantyInfo"
            name="warrantyInfo"
            value={formData.warrantyInfo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="availability">Availability</label>
          <input
            type="text"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Add Item</button>
        </div>
      </form>
    </div>
  );
};

export default AddJewelryItem;
