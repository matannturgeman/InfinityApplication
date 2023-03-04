import React from "react";
import { HomeProps, View } from "../../types/Views/home.types";
import YouTube from 'react-youtube';
import "./Home.scss";

function Home({ view }: HomeProps) {
  const {
    text,
    videoId
  }: View = view;

  return (
    <section className="home-page">
      <div className="flex home-elements-container-container">
        <YouTube videoId={videoId} />
      </div>

    </section>
  );
}

export default Home;
