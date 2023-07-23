import React, {useState} from 'react';
import MyContext from './context';

const Provider = (props) => {

    return (
        <MyContext.Provider value={props.value}>
            {props.children}
        </MyContext.Provider>
    );
};

export default Provider;