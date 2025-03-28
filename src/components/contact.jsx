import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

import { useLanguage } from "../LanguageContext";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {

  const { currentLang } = useLanguage(); // 获取当前语言

  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);

    const SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          clearState();
          alert(currentLang.SendSuccessTip); // 弹窗提示
        },
        (error) => {
          console.log(error.text);
          alert(currentLang.SendFailTip); // 弹窗提示
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{currentLang.Contact}</h2>

                <p>
                  {currentLang.ContactGreetings}
                </p>

                <p>
                  {currentLang.ContactGuidelines}
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  {currentLang.Send}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>{currentLang.ContactInfo}</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> {currentLang.Address}
                </span>
                {/*{props.data ? props.data.address : "loading"}*/}
                {currentLang.CompanyAddress}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> {currentLang.PhoneNumber}
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> {currentLang.Email}
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          {/*<div className="col-md-12">*/}
          {/*  <div className="row">*/}
          {/*    <div className="social">*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.facebook : "/"}>*/}
          {/*            <i className="fa fa-facebook"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.twitter : "/"}>*/}
          {/*            <i className="fa fa-twitter"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href={props.data ? props.data.youtube : "/"}>*/}
          {/*            <i className="fa fa-youtube"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; <a href="https://beian.miit.gov.cn" target="_blank">浙ICP备2025159139号</a>
            {/*&copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}*/}
            {/*<a href="http://www.templatewire.com" rel="nofollow">*/}
            {/*  TemplateWire*/}
            {/*</a>*/}
          </p>
        </div>
      </div>
    </div>
  );
};
