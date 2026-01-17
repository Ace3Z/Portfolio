import React from 'react';
import './Music.css';
import { FaSpotify } from 'react-icons/fa';
import albumCover1 from '../images/420.jpeg';
import albumCover2 from '../images/pbs.jpg'; 
import albumCover3 from '../images/mvsh.jpg'; 
import trackCover1 from '../images/ev.jpg';
import trackCover2 from '../images/phantom.jpeg';
import trackCover3 from '../images/wb.jpg';
import trackCover4 from '../images/rt.jpeg';
import trackCover5 from '../images/sign.jpg' 

const spotifyPlaylistUrl = 'https://open.spotify.com/playlist/6U2ZTXT4RvHqsDNpmClfVw?si=T6uxnZwPTKWG_InW-Lj82w';
const favoriteTracks = [
  {
    title: 'Witchblades',
    artist: 'Lil Peep and Lil Tracy',
    imgSrc: trackCover3,
    link: 'https://soundcloud.com/lil_peep/witchblades-ft-lil-tracy?si=69fa58eac48843f0b4da5fdacdafac0d&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Phantom',
    artist: 'EsDeeKid and Rico Ace',
    imgSrc: trackCover2,
    link: 'https://soundcloud.com/esdeekid/phantom?si=6781b8fe13594450b71d231c7a1c0cf3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Eurovision',
    artist: 'Central Cee',
    imgSrc: trackCover1,
    link: 'https://soundcloud.com/centralcee-music/eurovision-feat-rondodasosa?si=dd352d3875894c3c8f052506347a85dd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'REAL TALK',
    artist: 'Gucciflame',
    imgSrc: trackCover4,
    link: 'https://soundcloud.com/ashkankagan/real-talk-2?si=e05dc32c14df4fa5b1d7c3f845b33993&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  },
  {
    title: 'Sign',
    artist: 'Chvrsi',
    imgSrc: trackCover5,
    link: 'https://soundcloud.com/chvrsi/sign?si=ecd619af7a6d46ee9aa30d47cb58fee2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
  }
];
const favoriteAlbums = [
  {
    title: '420',
    artist: 'Koorosh',
    imgSrc: albumCover1,
    link: 'https://open.spotify.com/album/0K5B27KuWccxXMiWcCryXF?si=PQn-9Ka1S6WTnZhLjGaBiQ'
  },
  {
    title: 'Peymod Be Shemroon',
    artist: 'Ashkan Kagan, Hiphopologist, and Vinak',
    imgSrc: albumCover2,
    link: 'https://open.spotify.com/album/1iLiD0gV0Y0xdKz0dmw17h?si=t-yKht0iTaOouQ0FUw2_Zg'
  },
  {
    title: 'MENTAL ISSUES',
    artist: 'Mvshreghi',
    imgSrc: albumCover3,
    link: 'https://open.spotify.com/album/7b1mtQkVvYg2vnzH9bO7CR?si=PQo_HYgaTeygyVq0oTfrSQ'
  }
];

const Music: React.FC = () => {
  return (
    <div className="music-page">
      <div className="quote">
        <p>“Every day I’m hustlin’.” 
        <br />- Rick Ross 😎</p>
      </div>

      <div className="albums-section">
        <h3>Favorite Tracks</h3>
        <div className="albums">
          {favoriteTracks.map((album, index) => (
            <a
              key={index}
              className="album-link"
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 0.3}s` } as React.CSSProperties}
            >
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="albums-section">
        <h3>Favorite Albums</h3>
        <div className="albums">
          {favoriteAlbums.map((album, index) => (
            <a
              key={index}
              className="album-link"
              href={album.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 0.3}s` } as React.CSSProperties}
            >
              <img src={album.imgSrc} alt={album.title} className="album-image" />
              <div className="album-details">
                <h4>{album.title}</h4>
                <p>by {album.artist}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <a
        className="spotify-link"
        href={spotifyPlaylistUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaSpotify className="spotify-icon" />
        Link to my Spotify playlist
      </a>
    </div>
  );
};

export default Music;
