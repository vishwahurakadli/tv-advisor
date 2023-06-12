import s from "./style.module.css";

import { SMALL_BACKDROP_BASE_URL } from "../../config";

const MAX_TITLE_CHAR = 20;
export function TVShowListItem({ tvShow, onClick }) {
  const onClick_ = () => {
    onClick(tvShow);
  };
  return (
    <div className={s.container} onClick={onClick_}>
      <img
        className={s.img}
        src={SMALL_BACKDROP_BASE_URL + tvShow.backdrop_path}
        alt="logo"
      />
      <div className={s.title}>
        {tvShow.name.length > MAX_TITLE_CHAR
          ? tvShow.name.slice(0, MAX_TITLE_CHAR) + "..."
          : tvShow.name}
      </div>
    </div>
  );
}