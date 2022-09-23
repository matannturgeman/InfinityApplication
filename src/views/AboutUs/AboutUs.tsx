import React from "react";
import Form from "../../components/Form/Form";
import { AboutUsProps, View } from "../../types/Views/about-us.types";
import { DAYS_MAP } from "../../constants/about.constants";
import "./AboutUs.scss";

function AboutUs({ view }: AboutUsProps) {
  const {
    text,
    form,
    phone: { partner, owner },
    address: { text: addressText, long, lat },
    email,
    activity: { fromDay, toDay, open, close },
  }: View = view;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("enter onSubmit", e);
  };

  return (
    <section className="about-us-page">
      <h1>{text}</h1>
      <div className="about-us-datails-container">
        <div className="about-us-datails">
          <h1 className="phone-content">
            <p>{owner}</p>
            <p>{partner}</p>
          </h1>
          <h1>{addressText}</h1>
          <h1>{email}</h1>
          <h1>
            <span>{`  יום  ${DAYS_MAP.get(fromDay)}' `}</span>-
            <span>{`  יום  ${DAYS_MAP.get(toDay)}' `}</span>
            {open} - {close}
          </h1>
        </div>
          <div className="map-container">
              Map
          </div>
      </div>
      <Form form={form} onSubmit={onSubmit} />
    </section>
  );
}

export default AboutUs;
