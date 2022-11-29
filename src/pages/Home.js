import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { Logo } from "../images/Netflix";
import { ConnectButton, Icon, TabList, Tab, Button, Modal } from "web3uikit";
import { movies } from "../helpers/library";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [selectedFilms, setSelectedFilms] = useState();

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="#fff" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}>
            <div className="scene">
              <img src={movies[0].Scene} className="sceneImg" />
              <img src={movies[0].Logo} className="sceneLogo" />
              <p className="sceneDesc">{movies[0].Description}</p>
              <div className="playButton">
                <Button
                  icon="chevronRightX2"
                  text="Play"
                  theme="secondary"
                  type="button"
                />
                <Button
                  icon="plus"
                  text="Add to My List"
                  theme="translucent"
                  type="button"
                />
              </div>
            </div>
            <div className="title">Movies</div>
            <div className="thumbs">
              {movies &&
                movies.map((e) => {
                  return (
                    <img
                      src={e.Thumnbnail}
                      className="thumbnail"
                      onClick={() => {
                        setSelectedFilms(e);
                        setVisible(true);
                      }}
                    ></img>
                  );
                })}
            </div>
          </Tab>
          <Tab tabKey={2} tabName={"Series"} isDisabled={true}></Tab>
          <Tab tabKey={3} tabName={"MyList"}></Tab>
        </TabList>
        {selectedFilms && (
          <div className="modal">
            <Modal
              onCloseButtonPressed={() => {
                setVisible(false);
              }}
              isVisible={visible}
              hasFooter={false}
              width="1000px"
            >
              <div className="modalContent">
                <img src={selectedFilms.Scene} className="modalImg" />
                <img src={selectedFilms.Logo} className="modalLogo" />
                <div className="modalPlayButton">
                  <Button
                    icon="chevronRightX2"
                    text="Play"
                    theme="secondary"
                    type="button"
                  />
                  <Button
                    icon="plus"
                    text="Add to My List"
                    theme="translucent"
                    type="button"
                  />
                </div>
                <div className="movieInfo">
                  <div className="description">
                    <div className="details">
                      <span>{selectedFilms.Year}</span>
                      <span>{selectedFilms.Duration}</span>
                    </div>
                    {selectedFilms.Description}
                  </div>
                  <div className="detailedInfo">
                    Genre:<span className="deets">{selectedFilms.Genre}</span>
                    <br></br>
                    Actors:
                    <span className="deets">{selectedFilms.Actors}</span>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
