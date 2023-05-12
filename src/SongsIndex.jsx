/* eslint-disable react/prop-types */
export function SongsIndex(props) {
  return (
    <div>
      <h1>All Songs</h1>
      {props.songs.map((song) => (
        <div key={song.id}>
          <h2>{song.name}</h2>
          <p>Artist: {song.artist}</p>
          <p>Year: {song.year}</p>
          <p>Genre: {song.genre}</p>
          <p>Tempo: {song.tempo}</p>
          <p>Time: {song.time}</p>
          <p>Dynamics: {song.dynamics}</p>
          <p>Song Length: {song.song_length}</p>
          <a href={song.video_url}>Video Link</a> | <a href={song.sheet_music_url}>Sheet Music</a>
          <div>
            <button onClick={() => props.onShowSong(song)}>More info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
