import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={
          <Main />} />
        <Route path="/signup" element={
          <Register
          />} />
        <Route path="/signin" element={
          <Login
          />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
