/* eslint-disable react/prop-types */
export function SongsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateSong(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Song</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Artist: <input name="artist" type="text" />
        </div>
        <div>
          Year: <input name="year" type="integer" />
        </div>
        <div>
          Genre: <input name="genre" type="text" />
        </div>
        <div>
          Tempo: <input name="tempo" type="integer" />
        </div>
        <div>
          Time: <input name="time" type="text" />
        </div>
        <div>
          Dynamics: <input name="dynamics" type="text" />
        </div>
        <div>
          Song Length: <input name="song_length" type="integer" />
        </div>
        <div>
          Video Link: <input name="video_url" type="text" />
        </div>
        <div>
          Sheet Music: <input name="sheet_music_url" type="text" />
        </div>
        <button type="submit">Create Song</button>
      </form>
    </div>
  );
}
