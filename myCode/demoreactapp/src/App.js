import logo from './logo.svg';
import './App.css';
import Downshift from 'downshift';
import Heading from './Heading';

const items = [
  {value: 'apple',id:'a'},
  {value: 'pear', id: 'p'},
  {value: 'orange', id: 'o'},
  {value: 'grape', id:'g'},
  {value: 'banana', id:'b'},
]

function App() {
  return (
    // <>
    //   <Heading title="heading1"></Heading>
    //   {Heading({title:'heading2'})}
    // </>

    <div className="App">
      <h1>Hello</h1>
      <Downshift
        onChange={selection => {
          debugger;
          console.log(selection ? `You selected ${selection.value}` : 'Selection Cleared');
        }
        }
        itemToString={item => (item ? item.value : '')}
      >
      {({
        getInputProps,//aria-autocomplete="list" aria-labelledby="downshift-1-label" autocomplete="off" id="downshift-1-input" value="" aria-controls="downshift-1-menu", value
        getItemProps, //id="downshift-1-item-2" role="option" aria-selected="false"
        getLabelProps, //for ,id
        getMenuProps, //role="listbox" aria-labelledby="downshift-1-label" id="downshift-1-menu"
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps, //role="combobox" aria-expanded="false" aria-haspopup="listbox" aria-labelledby="downshift-1-label"
      }) => (
      <div>
        <label {...getLabelProps()}>Enter a fruit</label>
        <div
          style={{display: 'inline-block'}}
          {...getRootProps({}, {suppressRefError: true})}
        >
          <input {...getInputProps()} />
        </div>
        <ul {...getMenuProps()}>
          {(isOpen)
            ? items
                .filter(item => !inputValue || item.value.includes(inputValue))
                .map((item, index) => (
                  <li
                    {...getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          highlightedIndex === index ? 'lightgray' : 'white',
                        fontWeight: selectedItem === item ? 'bold' : 'normal',
                      },
                    })}
                  >
                    {item.value}
                  </li>
                ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
    </div>
  );
}

export default App;
