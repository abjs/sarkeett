import React from 'react';
import CreateStoryBox from './Story/CreateStoryBox';
import useFirestore from './useFirestore';

import './IMG.css'
const IMG = () => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
          <CreateStoryBox bgImage={doc.url}/>
      ))}
    </div>
  )
}

export default IMG;