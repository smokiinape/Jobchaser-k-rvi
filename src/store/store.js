// Denna fil kommer hålla våran redux store konfiguration

/* Här skapar vi en redux store konfiguration. Vi importerar configureStore från reduxjs/toolkit 
och vi importerar jobReducer från jobSlice.js. Sedan exporterar vi store konfigurationen
med ett object som har en reducer-property. 
Reducer property är ett objekt that maps the state key 'job' till reducer funktionen 'jobReducer'.
Detta innebär att det job-relaterade state kommer att vara stored under 'job' key inuti redux store */

import {configureStore} from '@reduxjs/toolkit';
import jobReducer from './jobSlice';

export default configureStore({
    reducer: {
        job: jobReducer,
    },
});

