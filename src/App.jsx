import React, { useEffect } from "react";
import { TVShowAPi } from "./api/tv-show";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import s from "./style.module.css";
import { useState } from "react";
import { BACKDROP_BASE_URL } from "./config";
import logoImage from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowList } from "./components/TVSowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearhcBar";

// TVShowAPi.fetchPOpulars();

export function App(params) {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowAPi.fetchPOpulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
        //   console.log(popularTVShowList);
      }
    } catch (error) {
      alert("Something Went wrong");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowAPi.fetchRecommendeds(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert("Something Went wrong");
    }
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowAPi.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Something Went wrong");
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }
  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center center`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImage}
              title="WatoWatch"
              subtitle="Find a show  you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={fetchByTitle} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </div>
    </div>
  );
}
