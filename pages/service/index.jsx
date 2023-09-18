import Head from "next/head";
import React from "react";
import Card from "../../components/Card";
import Cta from "../../components/Cta";
import Div from "../../components/Div";
import Layout from "../../components/Layout";
import PageHeading from "../../components/PageHeading";
import PricingTableList from "../../components/PricingTable/PricingTableList";
import SectionHeading from "../../components/SectionHeading";
import TestimonialSlider from "../../components/Slider/TestimonialSlider";
import Spacing from "../../components/Spacing";
import ServiceList from "../../components/ServiceList";

export default function Service() {
  return (
    <>
      <Head>
        <title>Quality promised services - ENNOVIX</title>
        <meta name="description" content="Quality promised services - ENNOVIX" />
        <link rel="icon" href="/favicon.jpg" type="image/jpg" /> 
      </Head>
      <Layout>
        <PageHeading
          title="Services"
          bgSrc="images/service_hero_bg.jpeg"
          pageLinkText="Services"
        />

        {/* Start Services Section */}
        <Spacing lg="145" md="80" />
        <Div className="container" id="service">
          <SectionHeading
            title="Our core services"
            subtitle="Services"
            variant="cs-style1 text-center"
          />
          <Spacing lg="70" md="45" />
          <ServiceList />
        </Div>
        {/* End Services Section */}

        <Spacing lg="125" md="55" />
        <TestimonialSlider />
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Layout>
    </>
  );
}
