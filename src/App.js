import './App.css';
import { Routes, Route } from "react-router-dom"
import Livestream from './components/Livestream';
import Payment from './components/Payment';
import { FaShieldAlt } from "react-icons/fa"

function AccessDenied() {
  return (
    <div className="access-denied">
      <h1>Access Denied</h1>
      <div className='shield-access'><FaShieldAlt /></div>
    </div>
  )
}

function PaymentStatus() {
  return (
    <h1>Payment Status -- Response</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="/live/:accessToken" element={<Livestream />} />
        <Route path="/invalidaccess" element={<AccessDenied />} />
        <Route path="/paymentstatus" element={<PaymentStatus />} />
      </Routes>
    </div>
  );
}

export default App;
