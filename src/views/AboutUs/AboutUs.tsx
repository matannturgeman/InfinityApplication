import React from 'react';
import { AboutUsProps, View } from "../../types/Views/about-us.types"
import "./AboutUs.scss"

function AboutUs({ view }: AboutUsProps) {
    const { text, form, phone: { partner, owner }, address: { text: addressText, long, lat  }, email, activity: { fromDay,toDay,open,close } }: View = view;
    return (
        <section className="about-us-page">
            <h1>{text}</h1>
            <h1>Phone partner: {partner}</h1>
            <h1>Phone owner: {owner}</h1>
            <h1>Address: {addressText}</h1>
            <h1>Address: {text}</h1>
            <h1>Email: {email}</h1>
            <h1>fromDay: {fromDay}</h1>
            <h1>toDay: {toDay}</h1>
            <h1>open: {open}</h1>
            <h1>close: {close}</h1>
        </section>
    );
}

export default AboutUs;