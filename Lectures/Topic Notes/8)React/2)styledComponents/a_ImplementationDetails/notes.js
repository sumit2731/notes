/**
 * @Syntax1
 */

const Title = styled.h1(`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`);


/**
 * @Implementation
 */
function h1(styles) {
    return function NewComponent(props) {
      const uniqueClassName = comeUpWithUniqueName(styles);
      const processedStyles = runStylesThroughStylis(styles);
      createAndInjectCSSClass(uniqueClassName, processedStyles);
      return <h1 className={uniqueClassName} {...props} />
    }
}

/**
 * Styles are injected into DOM only when component is rendered. as you can see from above code.this is because of 2 reasons-
 *  a)performance gain, we render only that CSS that we use.
 *  b)because of interpolated styles
 */

/**
 * @Syntax2
 */

const AlternativeSyntax = styled('h1')`
  font-size: 1.5em;
`);

/**
 * @Implementation that supports syntax2.
 */

const styled = (Tag) => (styles) => {
    return function NewComponent(props) {
      const uniqueClassName = comeUpWithUniqueName(styles);
      createAndInjectCSSClass(uniqueClassName, styles);
      return <Tag className={uniqueClassName} {...props} />
    }
}

styled.h1 = styled('h1');
styled.button = styled('button');
  // ...And so on, for all DOM nodes!


/**
 * @Syntax3 - Wrapping custom components
 * 
 * This only works if we apply the className prop to an HTML node inside our component though. if we do not use it
 * then className is only applied to custom component. since in html there is no equivalent of custom tag,
 * nothing happens
 * 
 * By delegating all of the props that Message receives to the <p> element it renders, we unlock this pattern. Thankfully, 
 * many third-party components (eg. the Link component in react-router) follow this convention.

Link to this heading
 */

function Message({ children, ...delegated }) {
    return (
      <p {...delegated}>
        You've received a message: {children}
      </p>
    );
}
  
const UrgentMessage = styled(Message)`
  background-color: pink;
`;
  
  render(
    <UrgentMessage>
      We're having a fire sale!
    </UrgentMessage>
  );



/**
  * @Syntax4 Composing styled-components
*/

const Button = styled.button`
  background-color: transparent;
  font-size: 2rem;
`

const PinkButton = styled(Button)`
  background-color: pink;
`;

render(
  <PinkButton>Hello World</PinkButton>
);


/**
 This is what happens under the hood -
  
 <style>
    .abc123 {
      background-color: transparent;
      font-size: 2rem;
    }
    .def456 {
      background-color: pink;
    }
  </style>
  
  <button class="abc123 def456">Hello World</button>
 
*/

/**

Key takeaway from this -
  When we render PinkButton, we're also rendering Button.
  Each styled component will produce a unique class, like abc123 or def456.
  All of the classes will be applied to the underlying DOM node.
  styled-components makes sure to insert these rules in the correct order, so that PinkButton's styles will overwrite any 
    conflicts in Button. here we make use of order in which styles are added to DOM.
 */

/**
 * @Implementation to support syntax 4
 */

 const styled = (Tag) => (styles) => {
  return function NewComponent(props) {
    const uniqueClassName = comeUpWithUniqueName(styles);
    const processedStyles = runStylesThroughStylis(styles);
    createAndInjectCSSClass(uniqueClassName, processedStyles);
    const combinedClasses =
      [uniqueClassName, props.className].join(' ');
    return <Tag {...props} className={combinedClasses} />
  }
}



/**
 * @Syntax5 - interpolated styles
 */

 const ContentImage = styled.img`
 display: block;
 margin-bottom: 8px;
 width: 100%;
 max-width: ${p => p.maxWidth};
`;

render(
 <>
   <ContentImage
     alt="A running shoe with pink laces and a rainbow decal"
     src="/images/shoe.png"
     maxWidth="200px"
   />
   <ContentImage
     alt="A close-up shot of the same running shoe"
     src="/images/shoe-closeup.png"
   />
 </>
)


/**
Behind the scenes -
 
  <style>
    .JDSLg {
      display: block;
      margin-bottom: 8px;
      width: 100%;
      max-width: 200px;
    }
    .eXyedY {
      display: block;
      margin-bottom: 8px;
      width: 100%;
    }
  </style>
  <img
    alt="A running shoe with pink laces and a rainbow decal"
    src="/images/shoe.png"
    class="sc-bdnxRM JDSLg"
  />
  <img
    alt="A close-up shot of the same running shoe"
    src="/images/shoe-closeup.png"
    class="sc-bdnxRM eXyedY"
  />
 
*/

/**

Here we have used 2 classes. The first class, sc-bdnxRM, is used to uniquely identify the React component that was rendered 
  (ContentImage). It doesn't provide any styles

 The interesting thing is that each image is given a completely unique class!. this is because, The seemingly-random class names, 
 JDSLg and eXyedY, are actually hashes of the styles that will be applied. When we interpolate in a different maxWidth prop, we get
 a different set of styles, and so a unique class is generated.

This explains why we can't "pre-generate" the classes! We have to wait until the component is rendered before we know what CSS will 
be applied,
 */

/**
Interpolation isn't the only way we can customize the styles of one particular component instance. My personal favourite way is to 
use CSS variables. It looks like this:

*/

const NewContentImage = styled.img`
  display: block;
  margin-bottom: 8px;
  width: 100%;
  max-width: var(--max-width);
`;

render(
  <>
    <NewContentImage
      alt="A running shoe with pink laces and a rainbow decal"
      src="/images/shoe.png"
      style={{
        '--max-width': '200px',
      }}
    />
    <NewContentImage
      alt="A close-up shot of the same running shoe"
      src="/images/shoe-closeup.png"
    />
  
  </>
)


/**
generated CSS -
  
  <style>
    .JDSLg {
      display: block;
      margin-bottom: 8px;
      width: 100%;
      max-width: var(--max-width);
    }
  </style>
  
  <img
    alt="A running shoe with pink laces and a rainbow decal"
    src="/images/shoe.png"
    class="sc-bdnxRM JDSLg"
    style="--max-width: 200px"
  />
  
  <img
    alt="A close-up shot of the same running shoe"
    src="/images/shoe-closeup.png"
    class="sc-bdnxRM JDSLg"
  />
 
*/

/**
 * By letting modern CSS do the dynamic stuff for us, we produce less CSS. This is also a potential performance win: when the dynamic 
 * data changes, we don't need to generate a whole new CSS class and append it to the page!*
 */