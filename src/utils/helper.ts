/**
 *
 *  App Helper functions
 *
 */

export const mapArtist = (artist: any) => {
  const { mbid, name, url, image } = artist;
  const [smallImage, mediumImage, largeImage]: any = image || [];
  return {
    id: mbid,
    mbid,
    name,
    url,
    image_url: largeImage["#text"],
    thumb_url: smallImage["#text"],
    facebook_page_url: url,
    mediumImage
  };
};

/** Map artists api data */
export const mapArtistsResults = (data: any) => (data || []).map(mapArtist);

/** map artists albums data */

export const mapArtistsAlbumsResults = (data: any) => {
  return (data || []).map((rawAlbums: any) => {
    const { mbid, name, url, image, artist } = rawAlbums;
    const [smallImage, mediumImage, largeImage]: any = image || [];

    return {
      id: mbid,
      mbid,
      event_name: name,
      country: artist.name,
      url,
      image_url: largeImage["#text"],
      bg_url: largeImage["#text"],
      thumb_url: smallImage["#text"],
      facebook_page_url: url,
      mediumImage,
      ...rawAlbums
    };
  });
};
