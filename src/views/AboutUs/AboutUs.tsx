import React from "react";
import Form from "../../components/Form/Form";
import Map from "../../components/Map/Map";
import ScrollBar from "../../components/MainLayout/ScrollBar/ScrollBar";
import { AboutUsProps, View } from "../../types/Views/about-us.types";
import { DAYS_MAP } from "../../constants/about.constants";
import "./AboutUs.scss";

function AboutUs({ view }: AboutUsProps) {
  const {
    text,
    form,
    phone: { partner, owner },
    address: { text: addressText, lng, lat },
    email,
    activity: { fromDay, toDay, open, close },
  }: View = view;

  return (
    <section className="about-us-page">
      <ScrollBar>
        <div className="flex about-us-elements-container-container">
          <div className="flex column about-us-elements-container">
            <h1 className="about-us-text">{text}</h1>
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
            </div>
          </div>

          <div className="map-container">
            <Map lng={lng} lat={lat} />
          </div>
        </div>

        <div className="form-container flex">
          <Form form={form} />
        </div>
      </ScrollBar>
    </section>
  );
}

export default AboutUs;
