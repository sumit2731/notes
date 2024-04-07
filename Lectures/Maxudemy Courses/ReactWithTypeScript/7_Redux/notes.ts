/**
 * @Important_Concepts -
 *  a)See how redux is setup using redux toolkit - store/cart-slice.ts, store/store.ts
 *  b)see how we do typings for redux hooks in src/store/hooks - store/hooks.ts
 */

/**
 * @ImportantTypes
 *  a)@reduxjs/toolkit
 *
        * 1)PayloadAction
        *  import { type PayloadAction } from "@reduxjs/toolkit";
        *  Used to give type to payload of action
        *
        * 2)Dispatch<someType>
        *  import {dispatch} from "@reduxjs/toolkit";
        *  this is used to give type to your dispatch i.e const dispatch = useDispatch()
        *
        *  someType - this is type of argument, dispatch should be called with. and it also returns that type
        *
        *  go to defination of useDisPatch
        *
        *
        * 3)ThunkDispatch
        *
        * import {ThunkDispatch} from "@reduxjs/toolkit";
        *
        *
        * It is enhanced form of dispatch which now instead of accepting plain object, now also accepts
        *  callbacks as well as actions. It also accepts some generics -
        *
        *  ThunkDispatch<State, ExtraThunkArg, BasicAction extends Action> (Action imported from redux)
        *
        *
        * Pattern -
        *      a)In Max ReactTypescriptCourse, both of these types were combine to define value returned from useDispatch hook.
        *      b)Both of these are also used to type of our customHook in project. useScriptlessMobileDispatch
    b)react-redux

        1)TypedUseSelectorHook - used to give type to useSelector
            import {TypedUseSelectorHook} from 'react-redux';
 *
 */

/**
 * Important types apart from Course
 *
 * a)giving type to action Creator - dirtyAction: ActionCreator<AnyAction>
 *          import { type ActionCreator, type AnyAction } from 'redux';
 *
 */
