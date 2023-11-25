import './App.css';
import VoylioApp from './components/voylio/VoylioApp';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      < VoylioApp />
      <ToastContainer />
    </div>
  );
}

export default App;
