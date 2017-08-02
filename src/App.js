import React from 'react';

import { Provider } from 'react-redux';


import store from './contact/store.js';
import MeForm from './contact/components/MeForm.js';

class App extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <MeForm />
            </Provider>
        );
    }
}


export default App;
