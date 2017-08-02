import React from 'react';

import store from './../store';


var me = {
    firstname: 'John',
    lastname:  'Doe',
    email:     'john.doe@example.com',
}

class WhoAmI extends React.Component {

    render() {
        return (
            <div>
                <p>I am {me.firstname} {me.lastname}</p>
                <p>You can email me at this address : {me.email}</p>
            </div>
        );
    }
}

export default WhoAmI;
