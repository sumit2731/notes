import {useState} from "react";

const Modal = ({ content }) => {

  const [view, setView] = useState(false)

  return (<>

    <button onClick={() => setView(true)}>Show</button>
    <div style={{ view ? "block" : "hidden"}>
        <div>{content}</div>
    </div>
  </>);

};

const App = () => {
   
  content = {item : "item" }
  
  // instead the content should be :
  // content = <div> welcom here </div>

  return (
   // passing these kind of content will through an error that Object is not react dom
   // you have to pass the items as an array of objects
    <Modal content={content}/>
  );
};


// making the typing could save you 
interface Modal {
    content: JSX.Element
}