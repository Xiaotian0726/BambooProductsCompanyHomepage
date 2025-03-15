import React from "react";
import { useLanguage } from "../LanguageContext";

export const About = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{currentLang.About}</h2>

              {/*<p>{props.data ? props.data.paragraph : "loading..."}</p>*/}
              <p>{currentLang.AboutUsParagraph}</p>

              <h3>{currentLang.WhyChooseUs}?</h3>
              <div className="list-style">
                <div className="col-lg-12 col-sm-12 col-xs-12">
                  <ul>
                    {/*{props.data*/}
                    {/*  ? props.data.Why.map((d, i) => (*/}
                    {/*      <li key={`${d}-${i}`}>{d}</li>*/}
                    {/*    ))*/}
                    {/*  : "loading"}*/}

                    <li key={`${currentLang.ReasonForChooseUs1}-0`}>{currentLang.ReasonForChooseUs1}</li>
                    <li key={`${currentLang.ReasonForChooseUs2}-1`}>{currentLang.ReasonForChooseUs2}</li>
                    <li key={`${currentLang.ReasonForChooseUs3}-2`}>{currentLang.ReasonForChooseUs3}</li>
                    <li key={`${currentLang.ReasonForChooseUs4}-3`}>{currentLang.ReasonForChooseUs4}</li>

                  </ul>
                </div>
                {/*<div className="col-lg-6 col-sm-6 col-xs-12">*/}
                {/*  <ul>*/}
                {/*    /!*{props.data*!/*/}
                {/*    /!*  ? props.data.Why2.map((d, i) => (*!/*/}
                {/*    /!*      <li key={`${d}-${i}`}> {d}</li>*!/*/}
                {/*    /!*    ))*!/*/}
                {/*    /!*  : "loading"}*!/*/}

                {/*    <li key={`${currentLang.ReasonForChooseUs5}-0`}>{currentLang.ReasonForChooseUs5}</li>*/}
                {/*    <li key={`${currentLang.ReasonForChooseUs6}-1`}>{currentLang.ReasonForChooseUs6}</li>*/}
                {/*    <li key={`${currentLang.ReasonForChooseUs7}-2`}>{currentLang.ReasonForChooseUs7}</li>*/}
                {/*    <li key={`${currentLang.ReasonForChooseUs8}-3`}>{currentLang.ReasonForChooseUs8}</li>*/}

                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
