import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className="app">
        <Header />
        <Main />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
