
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './TextForm';

function App() {
  return (
        <>

        <Navbar title="Fanstorm" about ="About"  dropdown = "Services" home = "Home" dropdown1 = "Pricing"
        dropdown2 = "Subscriptions" help ="Help"/>
        <TextForm button="Convert to Uppercase"/>

        </>
  );
}

export default App;
