const getMessages = () => [
    { id: 100, text: "Hey", author: "Ram" },
    { id: 101, text: "Hello!", author: "Dennis" },
    { id: 102, text: "How is it going?", author: "Ram" }
  ];
  
  const MessagesPresenter = ({ messages }) => {
    return (
      <ul>
        {messages.map(({ id, text, author }) => (
          <li key={id}>
            {author}: {text}
          </li>
        ))}
      </ul>
    );
  };
  
  class MessagesContainer extends React.Component {
    state = {
      messages: []
    };
  
    componentDidMount() {
      this.setState({
        messages: getMessages()
      });
    }
  
    render() {
      return <MessagesPresenter messages={this.state.messages} />;
    }
  }
  
  export default MessagesContainer;
  