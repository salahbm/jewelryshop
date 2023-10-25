"use client";
import React, { useState } from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Terms = () => {
  const [sections, setSections] = useState<any>({
    acceptanceOfTerms: false,
    changesToTerms: false,
    privacyPolicy: false,
    productsAndServices: false,
    payment: false,
    returnsAndRefunds: false,
    intellectualProperty: false,
    userConduct: false,
    limitationOfLiability: false,
    contactInformation: false,
  });

  const toggleSection = (section: any) => {
    setSections({
      ...sections,
      [section]: !sections[section],
    });
  };

  const sectionStyle = {
    marginBottom: "2px",

    backgroundColor: "white",
  };

  return (
    <div>
      <div>
        <Accordion
          expanded={sections.acceptanceOfTerms}
          onChange={() => toggleSection("acceptanceOfTerms")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="body1">1. Acceptance of Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              By accessing or using [Mr.Joni] (the ), you agree to be bound by
              these Terms and Conditions. If you do not agree with any part of
              these terms, please refrain from using our Website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.changesToTerms}
          onChange={() => toggleSection("changesToTerms")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="body1">2. Changes to Terms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We reserve the right to modify these terms at any time without
              notice. It is your responsibility to review these terms regularly
              to stay informed about any changes. Your continued use of the
              Website following the changes implies your acceptance of the
              modified terms.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.privacyPolicy}
          onChange={() => toggleSection("privacyPolicy")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="body1">3. Privacy Policy</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your use of the Website is also governed by our Privacy Policy,
              which can be found at [Link to Privacy Policy]. You should review
              this policy to understand how we collect, use, and protect your
              personal information.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.productsAndServices}
          onChange={() => toggleSection("productsAndServices")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="body1">4. Products and Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              a. Product Descriptions: We make every effort to accurately
              display the products and services on our Website, including their
              descriptions, prices, and availability. However, we do not
              guarantee the accuracy or completeness of this information.
            </Typography>
            <Typography>
              b. Pricing: We reserve the right to change product prices at any
              time. Pricing errors may occur, and we are not bound by inaccurate
              prices. We will contact you if any pricing discrepancies are
              discovered.
            </Typography>
            <Typography>
              c. Orders: When you place an order, it constitutes an offer to
              purchase our products or services. We reserve the right to accept
              or decline orders at our discretion.
            </Typography>
            <Typography>
              d. Shipping: We will make every effort to ship your order
              promptly, but we are not responsible for delays or damages
              incurred during shipping.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.payment}
          onChange={() => toggleSection("payment")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography variant="body1">5. Payment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              All payments made on our Website are secure and processed through
              a trusted payment gateway. You agree to pay for all products or
              services ordered through our Website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.returnsAndRefunds}
          onChange={() => toggleSection("returnsAndRefunds")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography variant="body1">6. Returns and Refunds</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For information about our return and refund policy, please refer
              to our Return and Refund Policy, which can be found at [Link to
              Return and Refund Policy].
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.intellectualProperty}
          onChange={() => toggleSection("intellectualProperty")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography variant="body1">7. Intellectual Property</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              a. All content on this Website, including images, text, logos, and
              designs, are protected by copyright and other intellectual
              property laws. You may not use, copy, or reproduce our content
              without our written permission.
            </Typography>
            <Typography>
              b. You may not use our trademarks, trade names, or other marks
              without our prior written consent.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.userConduct}
          onChange={() => toggleSection("userConduct")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8a-content"
            id="panel8a-header"
          >
            <Typography variant="body1">8. User Conduct</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You agree not to engage in any unlawful or prohibited activities
              when using our Website. This includes, but is not limited to,
              posting harmful content, spreading viruses, or engaging in any
              activities that may disrupt the Website or the experience of other
              users.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.limitationOfLiability}
          onChange={() => toggleSection("limitationOfLiability")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography variant="body1">9. Limitation of Liability</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We are not liable for any damages, whether direct, indirect, or
              consequential, that may arise from your use of this Website.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={sections.contactInformation}
          onChange={() => toggleSection("contactInformation")}
          style={sectionStyle}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
          >
            <Typography variant="body1">11. Contact Information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              If you have any questions or concerns regarding these Terms and
              Conditions, please contact us at [Your Contact Information].
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Terms;
