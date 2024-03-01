import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songsAPI } from '../../api/songApi';

function HomePage(props) {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(songsAPI.findAll());
  }, []);

  return (
    <div>
      {songs.songs.map(({ id, preview_url, album }) => (
        <div key={id}>
          <img src={album.images[0].url} alt="" width={54} />
          <audio controls>
            <source src={preview_url} type="" />
          </audio>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
