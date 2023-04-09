import React from "react";
import { HomeProps, View } from "../../types/Views/home.types";
import YouTube from "react-youtube";
import "./Home.scss";
import ScrollBar from "../../components/MainLayout/ScrollBar/ScrollBar";

function Home({ view }: HomeProps) {
  const { text, videoId }: View = view;

  return (
    <section className="home-page">
      <ScrollBar>
        <div className="flex home-elements-container-container">
          <div className="home-text-container">{text}</div>
          <YouTube videoId={videoId} />
        </div>
      </ScrollBar>
    </section>
  );
}

export default Home;
