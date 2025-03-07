import { Image } from "./image";
import React from "react";
import { useLanguage } from "../LanguageContext";

export const Gallery = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{currentLang.Gallery}</h2>
          <p>
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed*/}
            {/*dapibus leonec.*/}
            {currentLang.GalleryParagraph}
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
