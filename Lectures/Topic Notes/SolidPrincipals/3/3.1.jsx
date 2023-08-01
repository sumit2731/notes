// Button component
class Button extends React.Component {
    handleClick = (event) => {
      // handle button click
    };
  
    render() {
      return <button onClick={this.handleClick}>{this.props.children}</button>;
    }
  }
  
  // SubmitButton component
  class SubmitButton extends Button {
    render() {
      return (
        <button type="submit" onClick={this.handleClick}>
          {this.props.children}
        </button>
      );
    }
  }