import logo from './logo.svg';
import './App.css';
import Shop from './Shop';
import { useSelector } from 'react-redux'

function App() {
  const amount = useSelector(state => state.amount)
  return (
    <>
      <button disabled={true} style={{color: "black", backgroundColor: "wheat"}}>Your balance: {amount}</button>
      <hr/>
      <Shop/>
    </>
  );
}

export default App;
