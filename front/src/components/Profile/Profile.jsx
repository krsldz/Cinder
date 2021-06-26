import axios from 'axios';
import {useState} from 'react';

export default function Profile(){

const [drag, setDrag] = useState(false);

function dragStartHandler(e){
  e.preventDefault();
  setDrag(true)

}
function dragLeaveHandler(e){
  e.preventDefault();
  setDrag(false)

}
function onDropHandler(e) {
  e.preventDefault();
  let files =[...e.dataTransfer.files];
  const formData = new FormData();
  formData.append('file', files[0]);
  axios.post('http://localhost:8080/api/v1/fotos', formData)


}


return(
  <div>
    {drag
     ?
     <div
     onDragLeave={e =>dragStartHandler(e)}
     onDragStart={e => dragLeaveHandler(e)}
     onDragOver={e =>dragStartHandler(e)}
     onDrop ={e =>onDropHandler(e)}
     >Отпустите файлы чтобы их загрузить</div> : 
     <div
     onDragLeave={e =>dragStartHandler(e)}
     onDragStart={e => dragLeaveHandler(e)}
     onDragOver={e =>dragStartHandler(e)}
     >Перетащите файлы чтобы их загрузить</div>
  }

  </div>
)

}

