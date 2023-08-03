import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Routes/routes';
import { useServiceWorker } from './useServiceWorker';
import Swal from 'sweetalert2';
import PopupTopupSuccess from './components/PopupTopupSuccess';
import { useNavigate } from 'react-router-dom';
function App() {
  const { waitingWorker, showReload, reloadPage } = useServiceWorker();
  const [toggle, settoggle] = useState<boolean>(false);
  const navigate = useNavigate();

useEffect(() => {
  if (showReload && waitingWorker) {
    Swal.fire({
      title: 'Found a new Version!',
      text: 'New Update Available!',
      icon: 'success',
      confirmButtonText: 'Update now!'
    }).then(() => {
      reloadPage()
    })
  }  else {
    console.log("No update available!");
  }
}, [waitingWorker, showReload, reloadPage]);

  return (
    <>
      <Router />
    </>
  );
}

export default App;

