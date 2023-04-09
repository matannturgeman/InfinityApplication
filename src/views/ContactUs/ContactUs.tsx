import React from "react";
import Form from "../../components/Form/Form";
import Map from "../../components/Map/Map";
import { ContactUsProps, View } from "../../types/Views/contact-us.types";
import { DAYS_MAP } from "../../constants/about.constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { styles as viewsStyles } from "../Views.styles";
import ScrollBar from "../../components/MainLayout/ScrollBar/ScrollBar";
import "./ContactUs.scss";

function ContactUs({ view }: ContactUsProps) {
  const {
    social: { instagram, facebook },
    form,
    phone: { partner, owner },
    address: { text: addressText, lng, lat },
    email,
    activity: { fromDay, toDay, open, close },
  }: View = view;

  const onLinkClicked = (link) => {
    window?.open?.(link, "_blank")?.focus?.();
  };

  return (
    <section className="contact-us-page">
      <ScrollBar>
        <div className="flex contact-us-elements-container-container">
          <div className="flex column contact-us-elements-container">
            <div className="social-container">
              <InstagramIcon
                onClick={() => onLinkClicked(instagram)}
                sx={viewsStyles.pointer}
              />
              <FacebookIcon
                onClick={() => onLinkClicked(facebook)}
                sx={viewsStyles.pointer}
              />
            </div>
            <div className="contact-us-datails-container">
              <div className="contact-us-datails">
                <h1 className="phone-content">
                  <p>{owner}</p>
                  <p>{partner}</p>
                </h1>
                <h1>{addressText}</h1>
                <h1>{email}</h1>
                <h1>
                  <span>{`  יום  ${DAYS_MAP.get(fromDay) ?? ""}' `}</span>-
                  <span>{`  יום  ${DAYS_MAP.get(toDay) ?? ""}' `}</span>
                  {open} - {close}
                </h1>
              </div>
            </div>
          </div>

          <div className="map-container">
            <Map lng={lng} lat={lat} />
          </div>
        </div>

        <div className="flex form-container">
          <Form form={form} />
        </div>
      </ScrollBar>
    </section>
  );
}

export default ContactUs;
