import React, { useState } from "react";
import axios from "axios";

function CreateAlbum(props) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    picture: "",
    artist: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/albums`, form);
  };

  return (
    <div>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        value={form.genre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="picture"
        value={form.picture}
        onChange={handleChange}
      />
      <input
        type="text"
        name="artist"
        value={form.artist}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Créer</button>
    </div>
  );
}

export default CreateAlbum;
