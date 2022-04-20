const getLogMetaData = () => ({
    source: 'www'
  })
  
  const useLogger = () => {
    const [meta, setMeta] = useState({});
    const logger = (id, event) => {
      console.log(`id: ${id} | event: ${event}`);
      console.log(`source: ${meta.source}`);
    };
  
    useEffect(() => {
      setMeta(getLogMetaData());
    }, []); // We can mimic class component lifecycle methods
  
    return logger;
  }
  
  const Greetings = () => {
    const logger = useLogger();
  
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={() => logger(1, "enter")}>Enter</button>
      </div>
    );
  };