/* eslint-disable react/prop-types */
export function SongsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateSong(props.song.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroySong(props.song);
  };
  return (
    <div>
      <h1>Update Photo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.song.name} name="name" type="text" />
        </div>
        <div>
          Artist: <input defaultValue={props.song.artist} name="artist" type="text" />
        </div>
        <div>
          Year: <input defaultValue={props.song.year} name="year" type="integer" />
        </div>
        <div>
          Genre: <input defaultValue={props.song.genre} name="genre" type="text" />
        </div>
        <div>
          Tempo: <input defaultValue={props.song.tempo} name="tempo" type="integer" />
        </div>
        <div>
          Time: <input defaultValue={props.song.time} name="time" type="text" />
        </div>
        <div>
          Dynamics: <input defaultValue={props.song.dynamics} name="dynamics" type="text" />
        </div>
        <div>
          Song Length: <input defaultValue={props.song.song_length} name="song_length" type="integer" />
        </div>
        <div>
          Video Link: <input defaultValue={props.song.video_url} name="video_url" type="text" />
        </div>
        <div>
          Sheet Music: <input defaultValue={props.song.sheet_music_url} name="sheet_music_url" type="text" />
        </div>
        <button type="submit">Update Song</button>
        <button onClick={handleClick}>Destroy Song</button>
      </form>
    </div>
  );
}
