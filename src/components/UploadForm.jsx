import {useState} from 'react'

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
      <input type="file" name="image" id="image" onChange={ChangeFileHandle} />
    <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div className='error'>{file.name}</div>}
    </div>
    </form>
  )
}

export default UploadForm
