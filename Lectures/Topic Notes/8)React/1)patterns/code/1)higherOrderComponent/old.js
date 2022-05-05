const getLogMetaData = () => ({
    source: 'www'
  });
  
  const withLogger = (ComposedComponent) =>
    class extends React.Component {
      componentDidMount() {
        this.setState({
          meta: getLogMetaData()
        });
      }
  
      log = (id, event) => {
        console.log(`id: ${id} | event: ${event}`);
        console.log(`source: ${this.state.meta.source}`);
      }
  
      render() {
        return <ComposedComponent {...this.props} logger={this.log} />;
      }
    };
  
  const Greetings = ({ logger }) => {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={() => logger(1, 'enter')}>Enter</button>
      </div>
    );
  };
  
  export default withLogger(Greetings);