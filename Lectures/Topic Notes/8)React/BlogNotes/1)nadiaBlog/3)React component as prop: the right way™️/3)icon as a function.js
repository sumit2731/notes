/* 
We need to create a prop that starts with render to indicate it’s a render function, i.e. a function that returns an element,
call the function inside the button and add the result to component’s render function as any other element.
*/

export const ButtonWithIconRenderFunc = ({ children, renderIcon }) => {
  // getting the Element from the function
  const icon = renderIcon();
  return (
    <button>
      {/* adding element like any other element here */}
      {icon}
      {children}
    </button>
  );
};

// useage

<ButtonWithIconRenderFunc renderIcon={() => <AccessAlarmIconGoogle />}>
  button here
</ButtonWithIconRenderFunc>;

/* 
Modifying the size and color of the icon
*/

<ButtonWithIconRenderFunc
  renderIcon={() => <AccessAlarmIconGoogle fontSize="small" color="success" />}
></ButtonWithIconRenderFunc>;
