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
 *      is present
 */

/**
 * code2
 *
 * @ComponentPropsWithoutRef
 *
 * See code2/src/components/Input.tsx
 *
 * Here what we wanted to do is we want to pass all props to input by using destructuring trick
 * but we are getting the error. see figure 2. so here typescript is not allowing us
 * to pass props that are not declared in prop types.
 *
 * refer to figure 2, error we are getting is IntrinsicAttributes error. one way to avoid it is to
 * use prop destructuring. see figure 3. here we if pass some less props we get error but on passing
 * more props, there is no error.
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
 *
 *
 * Here we wanted to build a component that renders either button or anchor. also props that it accepts should be set accordingly
 * while rendering button it should accepts props that are valid for native button and vice versa.
 *
 * see code2/src/components/Button.tsx
 *
 * here we combined DiscrinatedUnion and ComponentPropsWithoutRef utility to achieve same.
 * see App.tsx, after passing el ="button" we cannot pass any prop that does snot belong to HTMLButton.
 * THis is only possible with DiscrinatedUnion and not with normal Union, see DummyComponent.tsx for that.
 *
 */

/**
 * Solution to above problem is great but tiny downside is that we always have to pass el prop, which is extra.
 * see alternate approach in code2/src/components/Button2.tsx
 *
 * more notes to be added
 */
