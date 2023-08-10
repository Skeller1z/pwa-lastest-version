import React, { useEffect, useState, useCallback, Suspense } from 'react';
import './App.css';
import Router from './Routes/routes';
import { Button, Snackbar } from '@material-ui/core';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import LoadingScreen from './LoadingScreen';
import LoadingScreen2 from './LoadingScreen2';
import { setupPwaUpdateNotifications } from './pwaUpdateNotifications';
function App() {
 
  useEffect(() => {
    setupPwaUpdateNotifications();
  }, []);

  return (
    <>
      {/* <Suspense fallback={<LoadingScreen />}> */}
        <div>
          <Router />
        </div>
      {/* </Suspense> */}

    </>
  );
}

export default App;

