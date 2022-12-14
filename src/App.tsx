import { useEffect,  useState, useRef } from 'react';
import './App.css';
import sortPriority from './utils/sortPriority';
import mergeImages from 'merge-images';
import Body from './assets/images/body.png';
import Eyes from './assets/images/eyes.png';
import Mouth from './assets/images/mouth.png';

function App() {
  const [selectedImageList, setSelectedImageList] = useState<string[]>([]);
  const currentImageRef = useRef<HTMLImageElement>(null);

  const mergeImage = (e : React.MouseEvent<HTMLImageElement>) => {
    let selectedImage = e.currentTarget.src;
    console.log(selectedImage)
    if(selectedImageList.includes(selectedImage)) {
        let filtered = selectedImageList.filter(src => src !== selectedImage)
        setSelectedImageList([...sortPriority(filtered)])
    } else {
      setSelectedImageList([...sortPriority([...selectedImageList, selectedImage])])
    }
  }

  useEffect(() => {
    mergeImages([...selectedImageList]).then((data:string) => {
        if(currentImageRef.current != undefined) {
          currentImageRef.current.src = data;
        }
    })
  },[selectedImageList])

  return (
    <div className="App">
      <div className="contentWrapper">
        <div id="mergedImageWrapper">
        { selectedImageList.length > 0 ? <img ref={currentImageRef} id="mergedImage"/> : null}
        </div>
        <li className="pickerList">
          <ul><img onClick={mergeImage} src={Body}/></ul>
          <ul><img onClick={mergeImage} src={Eyes}/></ul>
          <ul><img onClick={mergeImage} src={Mouth}/></ul>
        </li>
      </div>
    </div>
  );
}

export default App;
