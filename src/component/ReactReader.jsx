import React,{useState,useEffect,useRef} from 'react'
import { ReactReader } from 'react-reader'
import "../App.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
const MyReactReader = () => {
    const [size, setSize] = useState(100)
    const renditionRef = useRef(null)
    const changeSize = newSize => {
      setSize(newSize)
    }
    useEffect(() => {
      if (renditionRef.current) {
        renditionRef.current.themes.fontSize(`${size}%`)
      }
    }, [size])
  return (  
    <div className="container-fluid">
    <div className="row justify-content-center mt-4">
      <div className="col-md-12 ">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center fw-bolder">My EPUBbook Reader</h2>
            <div style={{ height: '80vh' }}>
              <ReactReader
                url="./Malgudi_Days.epub"
                epubOptions={{
                    flow: 'paginated',
                    manager: 'continuous',
                    paginate: true, 
                    swipeable:false
                  }}
                  getRendition={rendition => {
                    console.log("rendition",rendition);
                    renditionRef.current = rendition
                    renditionRef.current.themes.fontSize(`${size}%`)
                  }}
              />
            </div>
          </div>
          <div className="MyBtn">
          <button onClick={() => changeSize(Math.max(80, size - 10))} className='btn1 text-center fw-bolder'><RemoveCircleIcon /></button>
          <span className='fw-bold'>font size</span>
           <button onClick={() => changeSize(Math.min(130, size + 10))} className='btn2 text-center fw-bolder'><AddCircleIcon /></button>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  )
};
export default MyReactReader;