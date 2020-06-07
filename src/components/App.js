import React, { useState} from 'react';
import Form from './Form';
import Weather from './Weather';
import useSyncFetch from '../services/useSyncFetch';

const App = () => {
  const url = "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json";
  const key = "key=1289106d-5a64-4c12-92af-cbc243501aa9";
  const [idCity, setIdCity] = useState();

  const data = useSyncFetch(url + "/sitelist?" + key);

  return (
    <div className="wrapper">
      <Form
        setIdCity={setIdCity}
        data={data}
      />
      <Weather 
        idCity={idCity}
        url={url}
        apiKey={key}
      />
    </div>
  );
}

export default App;