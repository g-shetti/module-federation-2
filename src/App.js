import React from 'react';
// import './App.css';

const Mfe1Button = React.lazy(
  () => import('MFE1/Button')
);

function App() {
  return (
    <div>
      <h1>MFE2</h1>
      <div>
        <React.Suspense fallback='Loading Button'>
          <Mfe1Button />
        </React.Suspense>
      </div>
      <h2>MFE2</h2>
    </div>
  );
}

export default App;
