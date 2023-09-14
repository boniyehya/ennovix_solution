import parse from "html-react-parser";
import Link from "next/link";

import Div from "../Div";
import dynamic from "next/dynamic";

const WaterWave = dynamic(
  () => {
    return import("react-water-wave");
  },
  { ssr: false }
);

export default function PageHeading({ title, bgSrc, pageLinkText }) {
  return (
    <WaterWave
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      imageUrl={bgSrc}
    >
      {() => (
        <Div className="container">
          <Div className="cs-page_heading_in">
            <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link href="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">{pageLinkText}</li>
            </ol>
          </Div>
        </Div>
      )}
    </WaterWave>
  );
}
