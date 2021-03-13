import { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [response, setResponse] = useState('');
  
  useEffect(() => {
    callApi().then(res => setResponse(res.express)).catch(err => console.log(err));
  }, [])

  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };

  return (
    <div className="App">
      Template for React Typescript Express Application

      <h1>Response recieved from Express is: {response}</h1>
    </div>
  );
}

export default App;
