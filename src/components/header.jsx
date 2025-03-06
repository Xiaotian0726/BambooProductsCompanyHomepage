import React from "react";
import { useLanguage } from "../LanguageContext";

export const Header = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? currentLang.CompanyName : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? currentLang.HeaderParagraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {currentLang.LearnMore}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
