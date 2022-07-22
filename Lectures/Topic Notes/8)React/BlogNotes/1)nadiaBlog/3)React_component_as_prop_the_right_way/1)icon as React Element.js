export const ButtonWithIconElement = ({ children, icon }) => {
  return (
    <button>
      {icon}
      {children}
    </button>
  );
};
// useage

<ButtonWithIconElement icon={<AccessAlarmIconGoogle />}>
  button here
</ButtonWithIconElement>;

/* 
1)Modifying the size and color of the icon
*/
//very easy

<ButtonWithIconElement
  icon={<AccessAlarmIconGoogle fontSize="small" color="warning" />}
>
  button here
</ButtonWithIconElement>;

/* 
2)Default values for the icon size in the button
you’d want some pre-defined types of buttons. And for different buttons sizes, you’d want the button to control the size of the icon, 
not leave it to the consumer, so you won’t end up with tiny icons in huge buttons or vice versa by accident.
*/

/* 
For this one, it gets a little bit ugly. We receive our icon as a pre-defined element already, so the only thing we can do is to clone 
that element by using React.cloneElement api and override some of its props:

*/
// in the button component
const clonedIcon = React.cloneElement(icon, { fontSize: "small" });

return (
  <button>
    {clonedIcon}
    {children}
  </button>
);

//at consumerside -

<ButtonWithIconElement icon={<AccessAlarmIconGoogle color="warning" />} />;

/**
 * But what about default value, not overriding? What if I want consumers to be able to change the size of the icon if they need to?
 */

//Still possible, although even uglier, just nee to extract the passed props from the element and put them as default value:

const clonedIcon2 = React.cloneElement(icon, {
  fontSize: icon.props.fontSize || "small",
});
