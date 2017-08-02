import React from 'react';

import { Provider } from 'react-redux';


import store from './contact/store';
import MeForm from './contact/components/MeForm';
import WhoAmI from './contact/components/WhoAmI';


class App extends React.Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <MeForm />
                </Provider>
                <WhoAmI />
            </div>
        );
    }
}


export default App;
