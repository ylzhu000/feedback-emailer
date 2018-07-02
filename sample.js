// https://rallycoding.herokuapp.com/api/music_albums

// function fetchAlbums() {
//
//   // return a promise every time a fetch
//   fetch('https://rallycoding.herokuapp.com/api/music_albums')
//     .then(res=> res.json())
//     .then(json=> console.log(json));
// }
//
// fetchAlbums();



const fetchAlbums = async () => { 
  const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
  const json = await res.json()

  console.log(json);
}


fetchAlbums();
