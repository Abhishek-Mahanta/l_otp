import Login from './pages/Login';
import Doclogin from './pages/Doclogin';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Otp from './pages/Otp';
import Doctordetails from './pages/Doctordetails';
import Docotp from './pages/Docotp';
import Error from './pages/Error';
import Scheduleappt from './pages/Scheduleappt';
import Locateme from './pages/Locateme';
import Doctorindex from './pages/Doctorindex';
import Consultation from './pages/Consultation';
import Doctorreg from './pages/Doctorreg';
import Reguser from './pages/Reguser';
import Adminregister from './pages/Adminregister';
import Adminlogin from './pages/Adminlogin';
import Adminotp from './pages/Adminotp';
import Admindetails from './pages/Admindetails';
import Adminlanding from './pages/Adminlanding';
import Headers from './components/Headers';
import View from './pages/View';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Doclogin' element={<Doclogin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Doctordetails' element={<Doctordetails />} />
        <Route path='/user/otp' element={<Otp />} />
        <Route path='/Docotp' element={<Docotp />} />
        <Route path='*' element={<Error />} />
        <Route path='/scheduleappt' element={<Scheduleappt />} />
        <Route path='/locateme' element={<Locateme />} />
        <Route path='/Doctorindex' element={<Doctorindex />} />
        <Route path='/Doctorindex' element={<Doctorindex />} />
        <Route path='/Doctorreg' element={<Doctorreg />} />
        <Route path='/Reguser' element={<Reguser />} />
        <Route path='/Adminregister' element={<Adminregister />} />
        <Route path='/Adminlogin' element={<Adminlogin />} />
        <Route path='/Adminotp' element={<Adminotp />} />
        <Route path='/Admindetails' element={<Admindetails />} />
        <Route path='/Adminlanding' element={<Adminlanding />} />
        <Route path='/Consultation' element={<Consultation />} />
        <Route path='/View' element={<View />} />
        
      </Routes>
    </>
  );
}

export default App;
