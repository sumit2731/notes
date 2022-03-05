import React from 'react';
import MyParagraph from './MyParagraph';

const DemoOutput = (props) => {
    return (
        <MyParagraph>{props.show ? 'This is new!': ''}</MyParagraph>
    );
}

/**
 * @Desc works only for functional components
 * It revealautes the component only if props passe to component are changed
 */
export default React.memo(DemoOutput);