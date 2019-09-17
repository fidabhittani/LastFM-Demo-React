/** ARTIST CONNTAINER */

import React, { Fragment, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import ArtistItem from "components/ui/artist";
import { useTranslation } from "react-i18next";
import { EventsResultContainer } from "components/ui/results";
import { getArtistInfoById, getArtistAlbums } from "service/artist";
import { IReduxState } from "config/types";
import Loader from "components/ui/loader";
export default withRouter(({ history, match }) => {
  const [selectedArtist, setSelectedArtist]: any = useState({});
  const [data, setData] = useState([]);

  const {
    artistInfo: artistLoading = {},
    albums: albumsLoading = {}
  }: any = useSelector(({ app }: IReduxState) => app.loading);

  const { t } = useTranslation();
  useEffect(() => {
    const getArtistsInfo = async () => {
      const artist = await getArtistInfoById(match.params.id);
      setSelectedArtist(artist || {});
    };
    const getArtistsAlbums = async () => {
      const albums = await getArtistAlbums(match.params.id);
      setData(albums);
    };

    getArtistsInfo();
    getArtistsAlbums();
  }, [match.params.id]);

  return (
    <Fragment>
      {(artistLoading.status || albumsLoading.status) && <Loader />}
      <div className="results-content">
        <section className="artist-item-content">
          <div
            className="go-back"
            onClick={() => {
              history.push("/artists");
            }}
          >
            {"< Go Back"}
          </div>
          {selectedArtist.id && <ArtistItem artist={selectedArtist} />}
        </section>
        {!(albumsLoading && albumsLoading.status) && (
          <section className="upcomming-events">
            {data.length}&nbsp;{t("events.upcomming-events")}
          </section>
        )}

        <EventsResultContainer data={data} />
      </div>
    </Fragment>
  );
});
