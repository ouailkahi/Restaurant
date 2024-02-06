import React, { useEffect, useState } from 'react'
import Topbar from './component/Topbar'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Main from './component/Main'
import Service from './component/Service'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContactData } from './Redux/contactSlice'

function App() {
  const [count, setCount] = useState(0)
  const { data, status } = useSelector(state => state.contact)
  const dispatch = useDispatch();
  useEffect(() => {
    if (data === null) {
      dispatch(fetchContactData());
    } else {
      console.log(data);
    }
  }, [data, dispatch]);

  return (

    <React.Fragment>
      {data !== null && (
        <React.Fragment>
          <Topbar />
          <Navbar />
          <Main />
        </React.Fragment>

      )}

    </React.Fragment>

  )
}

export default App
