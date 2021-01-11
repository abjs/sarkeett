import React from 'react';
import AlbumBox from '../../Component/Album/AlbumBox';
import useFirestore from './useFirestore';
import './Images.css'



const Images = () => {

  const { docs } = useFirestore('images');
  // const [url, seturl] = useState("")
  // const [data, setData] = useState(null);
docs.map(doc =>console.log(doc.url))
  return (
    <div className="Images__app">
      {docs  && docs.map(doc =><AlbumBox bgImage={doc.url} key={doc.id} />)}
      
    </div>
  )
}

export default Images;