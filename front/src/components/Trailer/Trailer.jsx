import React from 'react'

function Trailer({id}) {
  return (
    <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ify9S7hj480" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default React.memo(Trailer)

