import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Authencation/Login';
import SignUp from './Component/Authencation/SignUp';
import Navbar from './Component/Header.js/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import { useState } from 'react';
import FAQ from './Component/FAQ';
import ConnectWalletModal from './Component/Modal/connectWalletModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [walletType, setWalletType] = useState('Arbitrum Rinkeby');
  return (
    <>
    <Navbar setWalletType={setWalletType}></Navbar>
      <Routes>
        <Route path='/' element={<Home walletType={walletType}/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <ConnectWalletModal></ConnectWalletModal>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
