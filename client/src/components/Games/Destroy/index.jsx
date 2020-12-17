import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.post(`http://localhost:4000/games/destroy`, { _id: id })
    .then(() => {
      setNotification(`Game was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected game due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/"/>;
}
 
export default Destroy;