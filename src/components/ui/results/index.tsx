import React from "react";

import ArtistItem from "components/ui/artist";
import EventItem from "components/ui/event";

import "./styles.scss";

/**
 *  Results Main Container
 * @param param0
 */
const ResultContainer = ({ children }: any) => (
  <section className="results-container">{children}</section>
);

/**
 *  Artists Data Results for grid show
 * @param param0
 */
export const ArtistsResultContainer = ({ data, onSelection }: any) => {
  return (
    <ResultContainer>
      {(data || []).map((artist: any, index: number) => {
        return (
          <ArtistItem
            onSelection={onSelection}
            artist={artist}
            key={`artist#${index}`}
          />
        );
      })}
    </ResultContainer>
  );
};

/**
 * Events based on artists grid view
 * @param param0
 */
export const EventsResultContainer = ({ data }: any) => {
  return (
    <ResultContainer>
      {(data || []).map((event: any, index: number) => {
        return <EventItem event={event} key={`event#${index}`} />;
      })}
    </ResultContainer>
  );
};
