import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [openJWPlayer, setOpenJWPlayer] = useState(true);

  const navigateToPlayListDetails = () => {
    setOpenJWPlayer(false);
  };

  return (
    <div className="App">
      <header className="App-header">
          <div className="card-body">
            <div className="m-b-32 m-b-15 card-details">
              <h1 className="align-left font-h1 clear m-b-7 main-heading">
                Class Of The Day
              </h1>
              <h6 className="text-gray font-h6 align-left main-sub-heading">
                Check out our daily featured class, hand-picked by our team.
                Enjoy your training!
              </h6>
            </div>
            <div>
              <div>
               
                <div class="cotd-card makeTextClickable">
                  <div class="cardPos comman">
                  {openJWPlayer?(
                    <div
                      id="cotd-card0b522c01-d805-43e9-acce-55283df55a3b"
                      class="imageHolder cotd-overlay"
                      onClick={() => navigateToPlayListDetails()}
                    >
                      <video
                        id="video-0b522c01-d805-43e9-acce-55283df55a3b"
                        preload="none"
                        loop=""
                        playsinline=""
                        class="Trailer thumbnail"
                        poster="https://contentportal-int.azurewebsites.net/media/image/VIDEO_POSTER_0.8018960086085747.jpg?width=785"
                        data-testid="CC - 15 Jan 2024"
                      >
                        {/* <source type="video/mp4"> */}
                      </video>
                      {/* <div class="contentTop">
                        <div class="timeholder">
                          <span color="white" class="classname cotd-date">
                            Friday 05 July
                          </span>
                        </div>
                      </div> */}
                    </div>
                  ):<div><iframe src="
                  https://cdn.jwplayer.com/players/leCHzoWi-wUkkXJdm.html"
                  width="500" height="281px" frameborder="0" scrolling="auto" title="Title14" style={{}} allowfullscreen></iframe></div>}
                  </div>
                </div>
                <div class="card-footer">
                  <div class="d-flex">
                    <div color="white" class="time title-truncate cotd-time">
                      CC - 15 Jan 2024
                    </div>
                  </div>
                  <div class="d-flex card-footer-info">
                    <span color="white" spacing="xl" class="font-caption">
                      4 Mins
                    </span>
                    <span
                      color="white"
                      spacing="s"
                      class="font-caption discIcon"
                    >
                      filter.SkillLevel_4
                    </span>
                  </div>
                  <div class="d-flex"></div>
                </div>
              </div>
            </div>
          </div>
      </header>
    </div>
  );
}

export default App;
