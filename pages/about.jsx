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
        <title>Quality promised services - ENNOVIX</title>
        <meta
          name="description"
          content="Quality promised services - ENNOVIX"
        />
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
                title="Welcome to Ennovix your trusted partner in technology
                solutions."
                subtitle="About Our Company"
              >
                <Spacing lg="30" md="20" />
                <p className="cs-m0">
                  At Ennovix, we are passionate about leveraging cutting-edge
                  technologies to drive digital transformation and empower
                  businesses to thrive in today's fast-paced world.
                  <br />
                  As a technology company, we offer a comprehensive range of
                  services to meet the diverse needs of our clients. From web
                  and app development to graphics design, UI/UX development,
                  branding, network installation, and digital marketing, our
                  talented team of experts is dedicated to delivering innovative
                  solutions that exceed expectations. <br />
                </p>
                <Spacing lg="15" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="15" md="30" />
              </SectionHeading>
            </Div>
            <Div className="col-lg-5 offset-xl-2">
              <Spacing lg="10" md="40" />
              <img
                src="/images/about_us.png"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <p>
              With a focus on user-centric design and state-of-the-art
              technology, we create seamless digital experiences that captivate
              your audience and drive engagement. Our team of skilled
              developers, designers, and marketers stays up-to-date with the
              latest industry trends and best practices, enabling us to deliver
              solutions that are not only visually stunning but also highly
              functional and user-friendly. <br />
              At Ennovix, we believe in building long-term partnerships. Our
              goal is to become an extension of your team, supporting you in
              achieving your business objectives and staying ahead of the
              competition. We pride ourselves on our agility, flexibility, and
              ability to adapt to your evolving needs, ensuring that our
              solutions continue to deliver value as your business grows.
              <br />
              We invite you to explore the possibilities with Ennovix and
              experience the power of technology for your business. Contact us
              today to discuss how we can collaborate to drive your digital
              success.
            </p>

            <Div className="col-lg-7">
              <img
                src="/images/ab.png"
                alt="About"
                className="w-100 cs-radius_15"
              />
              <Spacing lg="25" md="25" />
            </Div>
            <Div className="col-lg-5">
              <img
                src="/images/about_img_2.png"
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
                    src="/images/about_img_4.png"
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
                  What sets us apart is our commitment to excellence and client
                  satisfaction. We take the time to truly understand your
                  business objectives, challenges, and aspirations, allowing us
                  to tailor our solutions to your specific needs. Our
                  collaborative approach ensures that we work closely with you
                  throughout the project, providing transparent communication,
                  regular updates, and a focus on delivering measurable results.
                </p>
                <Spacing lg="15" md="15" />
                <p className="cs-m0">
                  When you choose Ennovix, you are choosing a reliable partner
                  who is committed to your success, delivers innovative
                  solutions, and provides exceptional customer service. Contact
                  us today to embark on a technology journey that empowers your
                  business for growth and achievement.
                </p>
                <Spacing lg="30" md="30" />
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0" />
              </SectionHeading>
            </Div>
          </Div>
        </Div>
        {/* End Why Choose Section */}

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
