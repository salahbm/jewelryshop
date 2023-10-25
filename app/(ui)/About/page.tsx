import React from "react";
import Head from "next/head";
import { Container, Typography, Grid } from "@mui/material";
import { diamond } from "@/public/assets";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <div className="text-white min-h-screen">
        <Container maxWidth="lg">
          <Grid container spacing={3} className="p-4 m-2">
            <Grid item xs={12} sm={6}>
              <Image
                src={diamond}
                alt="About Us"
                width={600}
                height={400}
                className="max-w-full rounded-lg shadow-md"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                Our Story
              </Typography>
              <Typography variant="body1">
                Welcome to Your Jewelry Brand! We are passionate about creating
                exquisite jewelry pieces that tell a story and make every moment
                special. Our journey began with a shared love for craftsmanship
                and a desire to create unique, handcrafted jewelry that reflects
                the beauty of nature and the elegance of timeless design.
              </Typography>
              <Typography variant="body1" style={{ marginTop: "1rem" }}>
                Explore our wide range of jewelry collections, from elegant
                necklaces to sparkling engagement rings. Each piece is carefully
                crafted with love and attention to detail, making it perfect for
                any occasion.
              </Typography>
              <Typography
                variant="h4"
                style={{ marginTop: "2rem" }}
                gutterBottom
              >
                Our Mission
              </Typography>
              <Typography variant="body1">
                Our mission is to make every customer feel cherished and unique.
                We are committed to providing exceptional customer service and
                ensuring that each piece of jewelry we create is of the highest
                quality. Your happiness is our priority.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3} className="p-4 m-2">
            <Grid item xs={12} sm={6}>
              {/* Add a Map here using a suitable component or iframe */}
              <iframe
                width="100%"
                height="300"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.6789!2d-123.456789!3d12.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQyJzA3LjciTiAxMjPCsDI1JzEyLjUiVw!5e0!3m2!1sen!2sus!4v1234567890"
                loading="lazy"
                title="Location Map"
              ></iframe>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1">
                Email: contact@yourjewelrybrand.com
              </Typography>
              <Typography variant="body1">Phone: +1 (123) 456-7890</Typography>
              <Typography
                variant="h4"
                style={{ marginTop: "2rem" }}
                gutterBottom
              >
                Address
              </Typography>
              <Typography variant="body1">123 Jewelry Street</Typography>
              <Typography variant="body1">Sparkling City</Typography>
              <Typography variant="body1">Gemstone Country, 12345</Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
