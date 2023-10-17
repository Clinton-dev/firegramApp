import {useState} from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const ChangeFileHandle = (e)=> {
    const fileTypes = ["image/jpeg","image/png"]
    const selectFile = e.target.files[0]


    if(selectFile  && fileTypes.includes(selectFile.type)) {
        setFile(selectFile)
        setError(null)
    } else {
        setFile(null)
        setError('File can either be png or jpeg')
    }
  }

  return (
    <form>
      <label>
        <input type="file" name="image" id="image" onChange={ChangeFileHandle} />
        <span>+</span>
      </label>
    <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
    </div>
    </form>
  )
}

export default UploadForm
