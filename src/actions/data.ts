/** DATA ACTIONS */

import { SET_ARTISTS } from "config/constants";
import { searchArtist } from "service/artist";

// Set Artists

export const setArtists = (payload: any) => {
  return {
    type: SET_ARTISTS,
    payload
  };
};

// Reset Loading Based on context

export const getArtists = (search: string) => async (dispatch: any) => {
  const results = await searchArtist(search);
  if (results) {
    dispatch(setArtists(results));
  }
};
