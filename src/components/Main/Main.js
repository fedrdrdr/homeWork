import {  useState } from "react";

function Main() {
  const [url, setUrl] = useState('https://picsum.photos/680/480')

  function handlerClick() {

    return setUrl(prev => {
      if (prev.includes('jpg')) {
       return prev.substring(0, 29)
      } else {
        return prev + '.jpg'
      }
    })
  }

  return (
    <div className='main' >
      <img onClick={handlerClick} src={url} alt='ups'/>
    </div>
  );
}

export default Main;
