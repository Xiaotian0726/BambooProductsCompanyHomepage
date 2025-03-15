import React from "react";

import { useLanguage } from "../LanguageContext";

export const Features = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>{currentLang.Features}</h2>
        </div>

        <div className="row">
          {/*{props.data*/}
          {/*  ? props.data.map((d, i) => (*/}
          {/*      <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">*/}
          {/*        {" "}*/}
          {/*        <i className={d.icon}></i>*/}
          {/*        <h3>{d.title}</h3>*/}
          {/*        <p>{d.text}</p>*/}
          {/*      </div>*/}
          {/*    ))*/}
          {/*  : "Loading..."}*/}

          <div key={`${currentLang.FeatTitle1}-0`} className="col-xs-4 col-md-4">
            {" "}
            <i className='fa fa-th-large'></i>
            <h3>{currentLang.FeatTitle1}</h3>
            <p>{currentLang.FeatText1}</p>
          </div>

          <div key={`${currentLang.FeatTitle2}-1`} className="col-xs-4 col-md-4">
            {" "}
            <i className='fa fa-align-justify'></i>
            <h3>{currentLang.FeatTitle2}</h3>
            <p>{currentLang.FeatText2}</p>
          </div>

          <div key={`${currentLang.FeatTitle3}-2`} className="col-xs-4 col-md-4">
            {" "}
            <i className='fa fa-cutlery'></i>
            <h3>{currentLang.FeatTitle3}</h3>
            <p>{currentLang.FeatText3}</p>
          </div>

          {/*<div key={`${currentLang.FeatTitle4}-3`} className="col-xs-6 col-md-3">*/}
          {/*  {" "}*/}
          {/*  <i className='fa fa-magic'></i>*/}
          {/*  <h3>{currentLang.FeatTitle4}</h3>*/}
          {/*  <p>{currentLang.FeatText4}</p>*/}
          {/*</div>*/}

        </div>
      </div>
    </div>
  );
};
