import { Login } from "./Login";
import { LogoutLink } from "./Logout";
import { Signup } from "./Signup";
import { SongsIndex } from "./SongsIndex";
import { SongsNew } from "./SongsNew";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [songs, setSongs] = useState([]);

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

  useEffect(handleIndexSong, []);

  return (
    <div>
      <Login />
      <Signup />
      <SongsIndex songs={songs} />
      <SongsNew onCreateSong={handleNewSong} />
      <LogoutLink />
    </div>
  );
}
