import React from "react";
import { useLanguage } from "../LanguageContext";

export const Services = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{currentLang.Services}</h2>
          <p>
            {/*Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed*/}
            {/*dapibus leonec.*/}
            {currentLang.ServicesParagraph}
          </p>
        </div>
        <div className="row">
          {/*{props.data*/}
          {/*  ? props.data.map((d, i) => (*/}
          {/*      <div key={`${d.name}-${i}`} className="col-md-4">*/}
          {/*        {" "}*/}
          {/*        <i className={d.icon}></i>*/}
          {/*        <div className="service-desc">*/}
          {/*          <h3>{d.name}</h3>*/}
          {/*          <p>{d.text}</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    ))*/}
          {/*  : "loading"}*/}

          <div key={`${currentLang.ServiceName1}-0`} className="col-6 col-md-3">
            {" "}
            <i className='fa fa-bed'></i>
            <div className="service-desc">
              <h3>{currentLang.ServiceName1}</h3>
              <p>{currentLang.ServiceText1}</p>
            </div>
          </div>

          <div key={`${currentLang.ServiceName2}-1`} className="col-6 col-md-3">
            {" "}
            <i className='fa fa-home'></i>
            <div className="service-desc">
              <h3>{currentLang.ServiceName2}</h3>
              <p>{currentLang.ServiceText2}</p>
            </div>
          </div>

          <div key={`${currentLang.ServiceName3}-2`} className="col-6 col-md-3">
            {" "}
            <i className='fa fa-building'></i>
            <div className="service-desc">
              <h3>{currentLang.ServiceName3}</h3>
              <p>{currentLang.ServiceText3}</p>
            </div>
          </div>

          <div key={`${currentLang.ServiceName4}-3`} className="col-6 col-md-3">
            {" "}
            <i className='fa fa-archive'></i>
            <div className="service-desc">
              <h3>{currentLang.ServiceName4}</h3>
              <p>{currentLang.ServiceText4}</p>
            </div>
          </div>

          {/*<div key={`${currentLang.ServiceName5}-4`} className="col-md-4">*/}
          {/*  {" "}*/}
          {/*  <i className='fa fa-plane'></i>*/}
          {/*  <div className="service-desc">*/}
          {/*    <h3>{currentLang.ServiceName5}</h3>*/}
          {/*    <p>{currentLang.ServiceText5}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/*<div key={`${currentLang.ServiceName6}-5`} className="col-md-4">*/}
          {/*  {" "}*/}
          {/*  <i className='fa fa-pie-chart'></i>*/}
          {/*  <div className="service-desc">*/}
          {/*    <h3>{currentLang.ServiceName6}</h3>*/}
          {/*    <p>{currentLang.ServiceText6}</p>*/}
          {/*  </div>*/}
          {/*</div>*/}

        </div>
      </div>
    </div>
  );
};
