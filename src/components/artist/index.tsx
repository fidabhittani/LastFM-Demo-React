/** ARTIST CONNTAINER */

import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SearchArtist from "components/ui/search";
import Loader from "components/ui/loader";
import { ArtistsResultContainer } from "components/ui/results";
import { getArtists as getArtistsAction } from "actions/data";
import { IReduxState } from "config/types";

import "./styles.scss";

export default withRouter(({ history }) => {
  const dispatch = useDispatch();
  const getArtists = (search: string) => dispatch(getArtistsAction(search));
  const artists = useSelector(({ data }: IReduxState) => data.artists);
  const { artisSearch: loading }: any = useSelector(
    ({ app }: IReduxState) => app.loading
  );

  return (
    <Fragment>
      <SearchArtist getSearch={getArtists} />
      {loading && loading.status && <Loader />}

      <div className="results-content artist">
        <ArtistsResultContainer
          data={artists}
          onSelection={(selected: any) => {
            history.push(`/artist/${selected.mbid}/events`);
          }}
        />
      </div>
    </Fragment>
  );
});
