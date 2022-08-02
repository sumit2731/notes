import React,{useState} from 'react';

export const ButtonWithIconElement = ({ children, icon }) => {
  // case1 & 2
  // return (
  //   <button>
  //     {icon}
  //     {children}
  //   </button>
  // );

  /* 
    Case 3- Default values for the icon size in the button
            passing props from inside the consuming component
  */

  /* 
  This clones the react element and allows us to pass new params or overwrite existing params. it merges new params woth old ones
  here we are overwiritng the color params even of user passes the color.we do not want to do that.first we want to check
  if color value exist in this rect element
  */
  // const clonedIcon = React.cloneElement(icon, {color: 'orange'});

  // const clonedIcon = React.cloneElement(icon, {
  //   color: icon.props.color || 'orange',
  // });

  // return (
  //   <button>
  //     {clonedIcon}
  //     {children}
  //   </button>
  // );

  /* 
    Case 4- Changing the Icon when buttpn is hovered
  */

    const [isHovered, setIsHovered] = useState();

    const clonedIcon = React.cloneElement(icon, {
      color: icon.props.color || 'orange',
      isHovered: isHovered,
    });
    
    return (
      <button onMouseEnter={() => setIsHovered(true)} onMouseLeave = {() => setIsHovered(false)}>
        {clonedIcon}
        {children}
      </button>
    );

};
