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

  return <div className=" min-h-screen">add item</div>;
};

export default AddJewelryItem;
