import logo from "./logo.svg";
import "./App.css";
import CreateAlbum from "./components/CreateAlbum";
import ListAlbums from "./components/ListAlbums";

function App() {
  return (
    <div className="App">
      {/* Ajotuer un input + un bouton de création d'un album */}
      <CreateAlbum />

      {/* afficher la liste des albums */}
      <ListAlbums />
      {/* ajouter un bouton de suppresison d'un album */}
    </div>
  );
}

export default App;
