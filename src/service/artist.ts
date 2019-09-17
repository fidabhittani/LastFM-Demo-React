import { formResource, ApiMethods } from "config/api";
import {
  mapArtistsResults,
  mapArtistsAlbumsResults,
  mapArtist
} from "utils/helper";
import request from "service";

/**
 *  ARTIST SERVICES
 *
 */

//** Get Artists */
export const searchArtist = async (search: string) => {
  const searchParams = formResource({
    resource: "artist",
    method: ApiMethods.artist.search,
    query: search
  });

  const response: any = await request({
    url: searchParams,
    context: "artisSearch"
  });

  const { data }: any = response || {};
  const { results }: any = data || {};

  const { artistmatches: { artist = [] } = {} }: any = results || {};
  return mapArtistsResults(artist);
};

/** Get Artist Albums */
export const getArtistAlbums = async (query: string) => {
  const searchParams = formResource({
    resource: "artist",
    method: ApiMethods.artist.gettopalbums,
    query: {
      name: "mbid",
      value: query
    }
  });

  const {
    data: { topalbums: response }
  }: any = await request({
    url: searchParams,
    context: "albums"
  });
  const { album = [] }: any = response || {};
  return mapArtistsAlbumsResults(album);
};

/** Get Artist Albums */
export const getArtistInfoById = async (query: string) => {
  const searchParams = formResource({
    resource: "artist",
    method: ApiMethods.artist.getinfo,
    query: {
      name: "mbid",
      value: query
    }
  });

  const response: any = await request({
    url: searchParams,
    context: "artistInfo"
  });

  const { data = {} } = response || {};
  return mapArtist(data.artist);
};
