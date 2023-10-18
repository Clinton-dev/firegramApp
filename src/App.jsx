import { useState } from 'react'
import './App.css'
import ImageGrid from './components/ImageGrid'
import Modal from './components/Modal'
import Title from './components/Title'
import UploadForm from './components/UploadForm'

function App() {
  const [selectedImage, setSelectedImg] = useState();

  return (
    <>
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImg={setSelectedImg}/>}
    </>
  )
}

export default App
