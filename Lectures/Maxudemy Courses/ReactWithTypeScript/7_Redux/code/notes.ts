/**
 * 1)Dispatch<someType>
 *
 *  this is used to give type to your dispatch i.e const dispatch = useDispatch()
 *
 *  someType - this is type of argument, dispatch should be called with. and it also returns that type
 *
 *  go to defination of useDiaptch
 *
 *
 * 2)ThunkDispatch
 *
 * This is imported from @reduxjs/toolkit
 *
 * It is enhanced form of dispatch which now instead of accepting plain object, now also accepts callbacks as well as actions. It also accepts some generics -
 *
 *  ThunkDispatch<State, ExtraThunkArg, BasicAction extends Action> (Action imported from redux)
 *
 *
 * Pattern -
 *      a)In Max ReactTypescriptCourse, both of these types were combine to define value returned from useDispatch hook.
 *      b)Both of these are also used to type of our customHook in project. useScriptlessMobileDispatch
 *
 *
 */

//actionCreator type
//dirtyAction: ActionCreator<AnyAction>

/**
 * Giving type to dispatch -
 *
 *
 * a)dispatch: ReturnType<typeof useDispatch>,
 *      this is project
 *
 *
 * b)In project, instead of using useDispatch - useScriptlessMobileDispatch is used
 */
