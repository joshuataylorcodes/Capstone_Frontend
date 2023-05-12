import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { SongsIndex } from "./SongsIndex";
import { SongsShow } from "./SongsShow";
import { SongsNew } from "./SongsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [songs, setSongs] = useState([]);
  const [isSongsShowVisible, setIsSongsShowVisible] = useState(false);
  const [currentSong, setCurrentSong] = useState({});

  const handleIndexSong = () => {
    console.log("handleIndexSongs");
    axios.get("http://localhost:3000/songs.json").then((response) => {
      console.log(response.data);
      setSongs(response.data);
    });
  };

  const handleNewSong = (params, successCallback) => {
    console.log(handleNewSong, params);
    axios.post("http://localhost:3000/songs.json", params).then((response) => {
      setSongs([...songs, response.data]);
      successCallback();
    });
  };

  const handleShowSong = (song) => {
    console.log("handleShowSong", song);
    setIsSongsShowVisible(true);
    setCurrentSong(song);
  };

  const handleUpdateSong = (id, params, successCallback) => {
    console.log("handleUpdateSong", params);
    axios.patch(`http://localhost:3000/songs/${id}.json`, params).then((response) => {
      setSongs(
        songs.map((song) => {
          if (song.id === response.data.id) {
            return response.data;
          } else {
            return song;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsSongsShowVisible(false);
  };

  useEffect(handleIndexSong, []);

  return (
    <div>
      <Login />
      <Signup />
      <SongsIndex songs={songs} onShowSong={handleShowSong} />
      <SongsNew onCreateSong={handleNewSong} />
      <Modal show={isSongsShowVisible} onClose={handleClose}>
        <h1>test</h1>
        <SongsShow song={currentSong} onUpdateSong={handleUpdateSong} />
      </Modal>
      <LogoutLink />
    </div>
  );
}
