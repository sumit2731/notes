import logo from "./logo.svg";
import "./App.css";
import { Heading } from "./components/Heading";
import {ButtonWithIconElement} from './components/ButtonWithIconElement';
import {ButtonWithIconComponent} from './components/ButtonWithIconComponent';
import {ButtonWithIconRenderFunc} from './components/ButtonWithIconRenderFunction';

function App() {
  /* 
  * Case 1,2,3
  */
  //this should be defined outside AppComponent, upto case3
  // const NewHeading = () => <Heading color="blue" bg="yellow"/>
  // const NewHeading2 = ({color}) => <Heading color={color} bg="yellow"/>

  //case 4
  const NewHeading = () => <Heading color="blue" bg="yellow"/>
  const NewHeading2 = ({color,isHovered}) => <Heading color={color} bg={isHovered ? 'red': 'green'}/>

  const buttonIcon = <Heading color="blue" bg="yellow"/>;

  const HeadingWithHoverForElement = (props) => {
    return (

      <Heading
        {...props}
        bg= {props.isHovered ? 'red' : 'green'}
      />
    );
  }
  return (
    <div className="App">

      {/* Case 1 - Base Case*/}

      {/* <ButtonWithIconElement icon= {<Heading/>}>
        IconElement
      </ButtonWithIconElement>

      <ButtonWithIconComponent Icon = {Heading}>
        IconComponent
      </ButtonWithIconComponent>

      <ButtonWithIconRenderFunc renderIcon= {() => <Heading/>}>
        IconFunction
      </ButtonWithIconRenderFunc> */}
      
      {/* Case 2 - Passing props to component(Modifying the size and color of the icon) */}
      
{/*       <ButtonWithIconElement icon= {<Heading color="blue"/>}>
        IconElement
      </ButtonWithIconElement>

      <ButtonWithIconComponent Icon = {NewHeading}>
        IconComponent
      </ButtonWithIconComponent>

      <ButtonWithIconRenderFunc renderIcon= {() => <Heading color="blue"/>}>
        IconFunction
      </ButtonWithIconRenderFunc> */}
      
      {
        /* 
          Case 3 - Default values for the icon size in the button
            passing props from inside the consuming component
        */
      }
      
      {/* <ButtonWithIconElement icon= {<Heading color="blue" bg="yellow"/>}>
        IconElement-colorProp
      </ButtonWithIconElement>
      
      <ButtonWithIconElement icon= {<Heading  bg="yellow"/>}>
        IconElement-defaultColor
      </ButtonWithIconElement>

      
      
      <ButtonWithIconComponent Icon = {NewHeading}>
        IconComponent
      </ButtonWithIconComponent>
      
      <ButtonWithIconComponent Icon = {NewHeading2}>
        IconComponent
      </ButtonWithIconComponent>

      
      <ButtonWithIconRenderFunc renderIcon= {() => <Heading bg="yellow" color="blue"/>}>
        IconFunction
      </ButtonWithIconRenderFunc>
      <ButtonWithIconRenderFunc renderIcon= {(color) => <Heading bg="yellow" color={color}/>}>
        IconFunction
      </ButtonWithIconRenderFunc> */}

      {/* Case 4 - Changing the Icon when buttpn is hovered*/}
      {/* 
       Use This syntax if we can chnage login in Heading Component

       <ButtonWithIconElement icon= {<HeadingWithHoverForElement/>}>
        IconElement-colorProp
      </ButtonWithIconElement>
       <ButtonWithIconElement icon= {<Heading />}>
        IconElement-colorProp
      </ButtonWithIconElement> 
      */}

      <ButtonWithIconElement icon = {<HeadingWithHoverForElement color="blue" bg="yellow"/>}>

      </ButtonWithIconElement>
      
      <ButtonWithIconElement icon = {<HeadingWithHoverForElement/>}>

      </ButtonWithIconElement>


      <ButtonWithIconComponent Icon = {NewHeading}>
        IconComponent
      </ButtonWithIconComponent>
      
      <ButtonWithIconComponent Icon = {NewHeading2}>
        IconComponent
      </ButtonWithIconComponent>

      <ButtonWithIconRenderFunc renderIcon= {() => <Heading bg="yellow" color="blue"/>}>
        IconFunction
      </ButtonWithIconRenderFunc>
      <ButtonWithIconRenderFunc renderIcon= {({color, isHovered}) => (<Heading color={color} bg={isHovered? 'red' : 'green'} />)}>
        IconFunction
      </ButtonWithIconRenderFunc>
    
    </div>
  );
}

export default App;
