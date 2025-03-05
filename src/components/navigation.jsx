import React from "react";
import LanguageSwitcher from '../LanguageSwitcher';
import { useLanguage } from "../LanguageContext";

export const Navigation = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            {/*React Landing Page*/}
            {currentLang.CompanyName}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                {currentLang.Features}
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                {currentLang.About}
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                {currentLang.Services}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                {currentLang.Gallery}
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="#testimonials" className="page-scroll">*/}
            {/*    Testimonials*/}
            {/*  </a>*/}
            {/*</li>*/}
            {/*<li>*/}
            {/*  <a href="#team" className="page-scroll">*/}
            {/*    Team*/}
            {/*  </a>*/}
            {/*</li>*/}
            <li>
              <a href="#contact" className="page-scroll">
                {currentLang.Contact}
              </a>
            </li>
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
