import './App.css';
import Header from './Components/Layout/Header'
import Main from './Components/Layout/Main';
import Footer from './Components/Layout/Footer';
import SignIn from './Components/Authorization/SignIn';
import store from './store/store';
import JobListAPI from './Components/Jobs/JobListAPI';

function App () {

  return (
    <>
        <Header/>
        <Main />
        <SignIn />
        <Footer />
    </>


  );
}

export default App;










