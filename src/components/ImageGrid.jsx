import React from 'react'
import useFireStore from '../hooks/useFireStore'


function ImageGrid({setSelectedImg}) {
  const {docs} = useFireStore('images')

  console.log(docs)
  return (
    <div className='img-grid'>
      { docs && docs.map(doc => (
        <div className='img-wrap' >
          <img src={doc.url} onClick={() => setSelectedImg(doc.url)}/>
        </div>
      ))}
    </div>
  )
}

export default ImageGrid
