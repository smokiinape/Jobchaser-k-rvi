import './App.css';
import Header from './Components/Layout/Header';
import Main from './Components/Layout/Main';
import Footer from './Components/Layout/Footer';
import SignIn from './Components/Authorization/SignIn';
import { Provider } from 'react-redux';
import store from './store/store';
import GetJobData from './Components/Jobs/GetJobData';

function App() {
    return (
        <Provider store={store}>
            <>
                <Header />
                <Main />
                <Footer />
            </>
        </Provider>
    );
}

export default App;
