import React from "react";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import LogoList from "../LogoList";

function Partners({ variant }) {
  return (
    <Div
      className={variant ? `cs-funfact_wrap_2 ${variant}` : "cs-funfact_wrap_2"}
    >
      <Div className="container">
        <SectionHeading
          title="Our reputed partners"
          subtitle="Top Clients"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
    </Div>
  );
}

export default Partners;
