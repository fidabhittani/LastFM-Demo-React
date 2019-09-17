import React from "react";

import CardBox from "components/ui/card.box";
import "./styles.scss";
/** ARTIST CONNTAINER */
export default ({ artist, selected = {}, onSelection }: any) => {
  return (
    <CardBox
      className={`artist-item ${
        artist.id === selected.id ? "selected-artist" : ""
      }`}
      onClick={() =>
        onSelection && onSelection(artist.id === selected.id ? {} : artist)
      }
    >
      <div className="avatar">
        <img src={artist.thumb_url} alt="ARTIST" />
      </div>
      <div className="artist-info">
        <div className="artist-name">{artist.name}</div>
        <div className="artist-id" title={artist.facebook_page_url}>
          {artist.facebook_page_url}
        </div>
      </div>
    </CardBox>
  );
};
