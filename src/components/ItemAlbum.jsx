import React from "react";
import axios from "axios";

function ItemAlbum({ title, genre, artist, id }) {
  const handleDelete = async () => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/albums/${id}`);
  };

  return (
    <div>
      <p>{title}</p>
      <p>{genre}</p>
      <p>{artist}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ItemAlbum;
