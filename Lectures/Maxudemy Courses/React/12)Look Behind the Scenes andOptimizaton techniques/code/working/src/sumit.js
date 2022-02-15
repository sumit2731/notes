import React, {memo, useState} from 'react';
import {render} from 'react-dom';
//==============================
const myContainerStyle = {
  maxWidth:'280px',margin:'5px auto 0',
  padding:'5px 0',backgroundColor:'#ddd',
  textAlign:'center',border:'1px solid #000',
  fontSize:'16px',fontFamily:'Helvetica'
};
const mySpacerStyle = {margin:'5px 0'};
const myButtonStyle = {
  padding:'5px 12px',backgroundColor:'#777',
  outline:'none',borderRadius:'10px',
  color:'#fff',fontSize:'1.0rem'
};
//==============================
const MyButton = memo(
  ({myClickHandlerProps}) => {
    console.log('My button');
    return <button
      onClick={myClickHandlerProps}
      style={myButtonStyle}
    >
      Click
    </button>;
  },
  () => true
);
//==============================
function MyApp() {
  const [myBoolean, setMyBoolean] = useState(false);
  const myClickHandler = () => {
    setMyBoolean(myPrevBoolean => !myPrevBoolean);
  };
  //----------------------------
  return (
    <div style={myContainerStyle}>
      See the console
      <hr style={mySpacerStyle} />
      {myBoolean ? 'True' : 'False'}
      <hr style={mySpacerStyle} />
      <MyButton myClickHandlerProps={myClickHandler} />
    </div>
  );
}
render(<MyApp />, document.getElementById('root'));