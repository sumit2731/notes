/**
 * useState
 * 
 * 1)
 * const [data,setData] = useState([])
 * Here type of data is never[]
 * 
 * 
 * 2)
 * const [data,setData] = useState()
 * here nether genric is given npr initial value is given. so generic also takes value of undefined.
 * type of data is undefined.
 * 
 * 3)
 * const [data,setdata] = useState(someInitialvalue)
 * Type of intial value is assigned to generic. hence we have types now.
 * type of data is type of initalValue
 * 
 * 
 * 4)
 * const [data,setData] = useState<Data>()
 * 
 * Here generic is given but no initial value.
 * here type of data is Data|undefined
 * 
 * 
 * 5)
 * const [data,setData] = useState<Data>(someInitialvalue)
 * here type of data is Data
 * 
 * 
 * 6)
 * now if we want assign anyother initial value to state like null, undefined manually we need to include 
 * that in union type.
 * 
 * const [data,setData] = useState<Data | null>(null)
 * const [data,setData] = useState<Data | undefined>(undefined)
 * 
 * 
 * 7)while functional form of setState, we can even return some extra properties form callback passed to setState
 *  we will not get error. see execrcise 13. this is how functiona types are ccompared in ts.
 * 
 * to avoid this you manually need to give return type to callback bassed to setState. how you will get 
 *  everything, you need.
 * 
 * 
 * To see how all this handled go useState defination and see how it uses ffunction overloads for same.
 */



/**
 * useCallback
 * 
 * 
 * const memorizedCallback = useCallback(callback, dependencyArray)
 * 
 * how to give type to memorizedCallback (see code in execrcise 15)
 * 
 * a)way 1 - Give proper types to passed callback i.e argtype and return type, TS will assign same type to
 *  return type of useCallback.
 * 
 * b)way 2 - pass generic type to useCallback
 *  const memorizedCallback = useCallback<FunctionType>(callback, dependencyArray)
 * 
 * recommendation is to use way1
 * 
 */

/**
 * useMemo
 * 
 * const memorizedValue = useMemo(callback, dependencyList)
 * 
 * how do we give type to memorizedValue. (lecture 16)
 * 
 * way 1 - TS will automatically get the return type from function and assign it to memorizedValue
 * 
 * way 2 - We can pass a generic argument to useMemo and have to make sure that passed fucntion akso returns
 *  argument of same type
 * 
 * way 3 - we can specify return type to callback passed to useMemo. it will allows to have extra type checks
 *  as we saw in case of useState
 * 
 * recommendation is to use way1 or way3.
 * 
 */


/**
 * useRef (see lectures from 17,18,19,20)
 * 
 * 1)const ref = useRef();
 * no geenric and no initial value is given. so genric defaults to undefined.
 * value of ref.curernt is undefined
 * 
 * When ref is 
 * 
 * 2)const id = useRef<string>();
 * since no intial value is given, value of current can be string or undefined
 * 
 * but ee lecture 18, when assigned to HTML eleemnt ref.current cannot have a value of undefined. so we need to use
 *  another callback form which is third one -
 * 
 * 
 * 3)const id = useRef<HTMLDivElement>(null); [see lecture 20]
 * geenric and inital value is given. when generic is given, only intial value whose type is diffrent from generic
 * that can be given is null.ref.current is genericType | null.
 * now this can be assigned to ref prop of html div. note that generic type needs to match with html element
 * on ref prop is used, otherwise we will get error.
 * 
 * also now ref.current property is readonly, this is because now we are saying that react will manage the ref.current 
 *  for us.
 * 
 * 
 * 4)const ref = useRef<string>("randomString")
 *  here generic and initial value have same type. so ref.current will have that same tyoe.
 */


/**
 * useReducer
 */