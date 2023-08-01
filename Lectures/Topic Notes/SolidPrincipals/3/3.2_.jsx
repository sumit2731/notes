// ChildA.js
import React from 'react';

const ChildA = ({ text }) => {
  return (
    <div style={{ color: 'red' }}>
      {text}
    </div>
  );
};


// ChildB.js
const ChildB = ({ text }) => {
  return (
    <div style={{ color: 'blue' }}>
      {text}
    </div>
  );
};

// Parent.js
const Parent = ({ text, textColor }) => {
  return (
    <div style={{ color: textColor }}>
      {text}
    </div>
  );
};