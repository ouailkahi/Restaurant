import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContactData } from '../Redux/contactSlice';
import { IonIcon } from '@ionic/react';
import { locationOutline, timeOutline, callOutline, mailOutline } from 'ionicons/icons';



export default function Topbar() {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.contact);

  useEffect(() => {
    if (data === null) {
      dispatch(fetchContactData());
    } else {
      console.log(data);
    }
  }, [data, dispatch]);

  return (
    <div className="topbar">
      <div className="container">
        <address className="topbar-item">
          <div className="icon">
            <IonIcon icon={locationOutline} aria-hidden="true" />
          </div>
          <span className="span">
            Restaurant St, Delicious City, London 9578, UK
          </span>
        </address>
        <div className="separator"></div>
        <div className="topbar-item item-2">
          <div className="icon">
            <IonIcon icon={timeOutline} aria-hidden="true" />
          </div>
          <span className="span">Daily : 8.00 am to 10.00 pm</span>
        </div>
        {status === 'succeeded' && (
          <>
            <a href={`tel:${data.phone}`} className="topbar-item link">
              <div className="icon">
                <IonIcon icon={callOutline} aria-hidden="true" />
              </div>
              <span className="span">{data.phone}</span>
            </a>
            <div className="separator"></div>
            <a href={`mailto:${data.email}`} className="topbar-item link">
              <div className="icon">
                <IonIcon icon={mailOutline} aria-hidden="true" />
              </div>
              <span className="span">{data.email}</span>
            </a>
          </>
        )}
      </div>
    </div>
  );
}

