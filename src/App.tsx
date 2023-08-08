import React, { useEffect, useState, useCallback, Suspense } from 'react';
import './App.css';
import Router from './Routes/routes';
import { Button, Snackbar } from '@material-ui/core';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import LoadingScreen from './LoadingScreen';
import LoadingScreen2 from './LoadingScreen2';

function App() {
  const [showReload, setShowReload] = useState(false);
  const [installingWorker, setInstallingWorker] = useState<ServiceWorker | null>(null);

  
  const onSWUpdate = useCallback((registration: ServiceWorkerRegistration) => {
    setShowReload(true);
    setInstallingWorker(registration.waiting);
  }, []);

  useEffect(() => {
    serviceWorkerRegistration.register({
      onUpdate: onSWUpdate
    });
  }, [onSWUpdate]);

  const reloadPage = useCallback(() => {
    if (installingWorker) {
      installingWorker.addEventListener("statechange", (event) => {
        if (event.target && (event.target as ServiceWorker).state === "activated") {
          setShowReload(false);
          window.location.reload();
        }
      });
      installingWorker.postMessage({ type: "SKIP_WAITING" });
    }
  }, [installingWorker]);

  return (
    <>
      {/* <Suspense fallback={<LoadingScreen />}> */}
        <div>
          <Snackbar
            open={showReload}
            message="A new version is available!"
            onClick={reloadPage}
            data-test-id="screens-new-version-snackbar"
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={reloadPage}
              >
                Reload
              </Button>
            }
          />
          <Router />
        </div>
      {/* </Suspense> */}

    </>
  );
}

export default App;

