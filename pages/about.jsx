import Head from "next/head";
import React from "react";
import Cta from "../components/Cta";
import Div from "../components/Div";
import FunFact from "../components/FunFact";
import Layout from "../components/Layout";
import PageHeading from "../components/PageHeading";
import SectionHeading from "../components/SectionHeading";
import TeamSlider from "../components/Slider/TeamSlider";
import Spacing from "../components/Spacing";
import Partners from "../components/Partners";
import LogoList from "../components/LogoList";

export default function About() {
  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "40K",
    },
    {
      title: "Project Completed",
      factNumber: "50K",
    },
    {
      title: "Team Members",
      factNumber: "245",
    },
    {
      title: "Digital products",
      factNumber: "550",
    },
  ];
  return (
    <>
      <Head>
        <title>Home - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.jpg" type="image/jpg" /> 
      </Head>
      <Layout>
        {/* Start Page Heading Section */}
        <PageHeading
          title="About Us"
          bgSrc="./images/blog_hero_bg.jpeg"
          pageLinkText="About Us"
        />
        {/* End Page Heading Section */}

        {/* Start About Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-7">
              <SectionHeading
                title=" Elevating Your Digital Presence for Success"
                subtitle="About Our Company"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Ennovix is your partner in digital success. Our expert team of
                  web developers and graphic designers creates captivating
                  experiences that amplify your brand's impact. From user
                  engagement to conversions, we deliver tangible benefits,
                  ensuring your online presence drives results.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="40" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <img
                src="/images/about_img_1.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-7">
              <img
                src="/images/about_img_2.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_3.jpeg"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
        {/* End About Section */}

        {/* Start Partners Section */}
        <div className="container">
          <Div className="container">
            <SectionHeading
              title="Our reputed partners"
              subtitle="Top Clients"
              variant="cs-style1 text-center"
            />
            <Spacing lg="70" md="45" />
            <LogoList />
          </Div>
        </div>
        {/* End Partners Section */}

        {/* Start Why Choose Section */}
        <Spacing lg="100" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-image_layer cs-style1">
                <Div className="cs-image_layer_in">
                  <img
                    src="/images/about_img_4.jpeg"
                    alt="About"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-xl-5 offset-xl-1 col-lg-6">
              <SectionHeading
                title="Helping Your Success Through Digital"
                subtitle="Why Choose Us"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  Choose Ennovix for unparalleled expertise that brings your
                  digital vision to life. Our skilled team merges creativity
                  with technology to deliver solutions that stand out.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  With a focus on innovation, user-centered design, and
                  measurable results, we empower your brand to thrive in the
                  digital landscape.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

        {/* Start Team Section */}
        <Spacing lg="145" md="80" />
        <Div className="container">
          <SectionHeading
            title="Awesome team <br/>members"
            subtitle="Our Team"
            variant="cs-style1"
          />
          <Spacing lg="85" md="45" />
          <TeamSlider />
        </Div>
        {/* End Team Section */}

        {/* Start CTA Section */}
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Cta
            title="Let’s disscuse & make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
        {/* End CTA Section */}
      </Layout>
    </>
  );
}