import React, { useState, useEffect } from 'react';



function Timer(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {

    const timeOutId = setTimeout(() => {
        setCount(count + 1)

      }, 1000);
return ()=>{
  clearTimeout(timeOutId)
}
  }, [count])

  return (
    <div className='container'>
   {count<60
   ? <p>Вы находитесь на сайте <br/> {count} <br/> секунд</p>
   :  <p>Вы находитесь на сайте <br/>{Math.floor(count/60) } минут и {count%60} секунд</p>
  }


      
    </div>
  );
}

export default Timer;
