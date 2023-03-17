import './App.css';
import Home from './Components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
function App() {
  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
