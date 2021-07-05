import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemAlbum from "./ItemAlbum";

function ListAlbums(props) {
  const [albums, setAlbums] = useState([]);
  // get albums from api

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/albums`).then((result) => {
      setAlbums(result.data);
    });
  }, []);

  return (
    <>
      {albums.map((album) => (
        <ItemAlbum key={album.id} {...album} />
      ))}
    </>
  );
}

export default ListAlbums;
