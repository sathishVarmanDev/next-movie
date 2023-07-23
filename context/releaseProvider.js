import React, { useState } from 'react';
import ReleasesContext from './releasesContext';

const ReleaseProvider = (props) => {

    return (
        <ReleasesContext.Provider value={props.value}>
            {props.children}
        </ReleasesContext.Provider>
    );
};

export default ReleaseProvider;