/**
 * code1
 *
 * Component which renders different content based on props passed and also accepts different types
 * of props. see code1/src/components/InfoBox.tsx
 *
 * Here we used @DiscrinatedUnion to build a flexible component. which gives better auto completion -
 *  a)while using that component (ts is able to know which props are required when we give value to mode
 *      prop)
 *  b) Also inside component we can create typeguards and will get severity property only where it
 *      is present. As of now we are using 'return' keyword to tell ts that we will reach at some places
 *      only when a mode property is not hint
 */

/**
 * code2
 *
 * @ComponentPropsWithoutRef
 *
 * See code2/src/components/Input.tsx
 *
 * Here Input.tsx is wrapper around native input component.We want to forward some props which are accepted
 *     by native input, via InputComponent. Inside InpuTComponent we are using destruturing trick to forward all
 *     props to native input,but ts gives us error, when we try to pass props which are not defined in props type.
 *     see left side of figure2
 *
   one way to avoid it is to use prop destructuring.@Note1 this is trick to pass extra props to component.
   See figure 3. here we if pass some less props we get error but 
   on passing more props, there is no error.
 *
 * In order to overcome this we used ComponentProps more specifically ComponentPropsWithOutRef.
 *
 * there are 3 versions - ComponentProps, ComponentPropsWithoutRef, ComponentPropsWithRef
 *
 * since we are not forwarining ref , so we used ComponentProps
 *
 */

/**
 * code 2
 *
 * Here we wanted to build a component that renders either button or anchor. also props that it accepts
 * should be set accordingly while rendering button it should accepts props that are valid for native button
 * and vice versa.
 *
 * see code2/src/components/Button.tsx
 *
 * here we combined DiscrinatedUnion and ComponentPropsWithoutRef utility to achieve same.
 * see App.tsx, after passing el ="button" we cannot pass any prop that does snot belong to HTMLButton.
 * This is only possible with DiscrinatedUnion and not with normal Union, see DummyComponent.tsx and its
 * useage in App.tsx here we are able to pass props that are not valid.This component also accepts a Union
 * type prop, but does not provide level of type checking that we get with discriminted union.
 *
 */

/**
 * 
 * code 2
 * Solution to above is great but tiny downside is that we always have to pass el prop, which is extra.
 * here we try to differeiate based on href attribute
 * see alternate approach in code2/src/components/Button2.tsx
 *
 * there also we had 2 approaches. see code comments
 *
 * with second approach our code is working but down side of this approach is that while using that component
 * we do get type errors, for example these combinations are possible(see figure 4) -
 *      <Button2 target="some target">A Button</Button2>
        <Button2 href="https://google.com" disabled={true}></Button2>
 *
 *
 * Now I am not getting any support because of course when I'm using the button component,TypeScript just
 * knows that we can set either button or anchor props. So by default, it accepts both. And that's why I can
 * mix and match those different props.
 * 
 * @never type to ensure that a property is never present in type in union
 * to fix it we used :never type. see second half of lecture 53 for this.
 */

/**
 * Code 2 -
 *
 * @PolymorphiceComponent
 * @ElementType
 *
 * lectures - 53,54,55
 *
 *
 * src/component/Container.tsx
 *
 * here we defined a polymorphic component, i.e component that warps a another component.
 * then we added types such that correct props should be passed depending upon which component
 * is rendered. this was done generics
 *
 * concepts learned -
 * ElementType type
 * generics in component
 *
 *
 * also in lecture 55 max has some examples of dynamic component. these are coded in src/examples
 *
 * see List component to see how we can use generics in components.
 *
 */

/**
 * @Passing 'ref' prop to functional components
 *
 * code2
 *
 * src/components/InputWithRef
 *
 * In order to use pass ref in functional components, we need to use forwardRef. otherwise we get error
 * see figure 5. also see comments in  in InputWithRef.jsx
 */

/**
 * @FormWrapperComponent
 *
 * lecture 59
 * code2
 *
 * src/components/Form.tsx
 *
 * here we built a formComponent that wraps all chiildren passed to it and then handles the submit event.
 * OnSubmit event it shuld call the callback passed to it with form data. but trick here was data of form cannot be
 * know in Form component as it is dynamic.
 *
 * Concepts learned -
 *     a)In FormComponent we were not sure about type of data so we passed unknown but later in App.tsx,
 *      we realized that we know the type,so we used typecasting to give it a type. also we saw how we
 *      we can use typeguards for same. see code2/src/App.tsx
 */

/**
 * @FormWrapperComponent - Enhancement
 *
 * code - src/component/Form2.tsx
 *
 * here we exposed a custom api from FormComponent using useImperativeHandler and then assigned type
 * to refrence of our custom Component
 *
 *
 *
 */
