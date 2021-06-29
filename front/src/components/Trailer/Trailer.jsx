import React from 'react';

function Trailer({ trailer }) {
  console.log(trailer);
  return (
    <div>
      <iframe
        width='560'
        height='315'
        src={trailer}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default React.memo(Trailer);
