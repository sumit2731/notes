import { click } from "@testing-library/user-event/dist/click";
import React,{ useState } from "react";

const Button = ({label}) => {
    console.log("Button called");
    const [buttonState, setButtonState] = useState(new Date().getTime());
    const clickHandler = () => {
        //console.log("button clicked");
        setButtonState(new Date().getTime());
    }
    return (
        <>
            <button onClick ={clickHandler}>{label}</button>
            <span>{buttonState}</span>
        </>
        
    );
}

export default React.memo(Button);
//export default Button;