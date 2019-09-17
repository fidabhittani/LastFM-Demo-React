/**
 *
 * APIS CONFIGS
 *
 */

export const API_HOSTS = {
  APP: `//ws.audioscrobbler.com/2.0`
};
export const ApiMethods = {
  artist: {
    search: "artist.search",
    getinfo: "artist.getinfo",
    gettopalbums: "artist.gettopalbums"
  }
};

export const API_KEY =
  process.env.REACT_APP_API_KEY || `601460e486950f4ff0db5eaf4cf1dc69`;

/** Create Resource Query Strings */
export const formResource = ({ resource, method, query }: any) => {
  let { name, value } = query;
  if (typeof query === "string") {
    name = resource;
    value = query;
  }

  return `?method=${method}&api_key=${API_KEY}&format=json&${name}=${value}`;
};
