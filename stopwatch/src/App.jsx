import { useState } from 'react';
import Stopwatch from './Stopwatch.jsx';
import Login from './Login.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Stopwatch />
      )}
    </>
  );
}
export default App;
