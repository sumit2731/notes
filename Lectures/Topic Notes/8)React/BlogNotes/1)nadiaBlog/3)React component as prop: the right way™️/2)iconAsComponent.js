/* We need to create a prop that starts with a capital letter to signal it’s a component, and then render that component 
from props like any other component. */
export const ButtonWithIconComponent = ({ children, Icon }) => {
  return (
    <button>
      {/* our button is a component // its name starts with a capital letter to
      signal that so we can just render it here as any other component */}
      <Icon />
      {children}
    </button>
  );
};

//useage -

import AccessAlarmIconGoogle from "@mui/icons-material/AccessAlarm";

<ButtonWithIconComponent Icon={AccessAlarmIconGoogle}>
  button here
</ButtonWithIconComponent>;

/* 
1)Modifying the size and color of the icon
*/

const AccessAlarmIcon = () => (
  <AccessAlarmIconGoogle fontSize="small" color="error" />
);

const Page = () => {
  return (
    <ButtonWithIconComponent Icon={AccessAlarmIcon}>
      button here
    </ButtonWithIconComponent>
  );
};
/* 
Important: the AccessAlarmIcon component should always be defined outside of the Page component, otherwise it will re-create this 
    component on every Page re-render, and that is really bad for performance and prone to bugs. If you’re not familiar with how 
    quickly it can turn ugly, this is the article for you: How to write performant React code: rules, patterns, do's and don'ts
*/
