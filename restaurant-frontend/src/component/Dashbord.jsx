import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactData } from '../Redux/contactSlice';
import {fecthRepasData} from '../Redux/repasSlice';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import { Outlet } from 'react-router';
import { chevronUpOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
export default function Dashbord() {

    const [count, setCount] = useState(0)
  const { data } = useSelector(state => state.contact)
  const { repas, status} = useSelector(state => state.repas)
  const dispatch = useDispatch();
  useEffect(() => {
    if (data === null && status!== "succeeded") {
      dispatch(fetchContactData());
      dispatch(fecthRepasData())
    } else {
      console.log(data);
    }
  }, [data, status, dispatch]);

  return (

    <React.Fragment>
      {data !== null && (
        <React.Fragment>
          <Topbar />
          <Navbar />
          <br />
          <br />
          <Outlet/>
          <br />
          <Footer/>
          <a href="#top" className="back-top-btn active" aria-label="back to top" data-back-top-btn>
            <IonIcon icon={chevronUpOutline} aria-hidden="true" />
          </a>
        </React.Fragment>

      )}

    </React.Fragment>
  )
}
