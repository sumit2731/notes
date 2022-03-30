import React from 'react';
import {intlShape} from 'react-intl';

const Child = (props,context) => {
    console.log(context);
    return (
        <div>
            <p>THis is p</p>
        </div>
    );
}

Child.contextTypes = {
    intl: intlShape
}

export default Child;