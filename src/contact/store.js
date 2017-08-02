import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialMeState = {
    firstname: 'John',
    lastname:  'Doe',
    email:     'john.doe@example.com',
};

const store = createStore(combineForms({
    me: initialMeState,
}));

export default store;
