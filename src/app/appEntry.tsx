import React from 'react';
import ReactDOM from 'react-dom/client';
import MapProvider from './providers/MapProvider';
import App from "../App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MapProvider>
            <App />
        </MapProvider>
    </React.StrictMode>
);
