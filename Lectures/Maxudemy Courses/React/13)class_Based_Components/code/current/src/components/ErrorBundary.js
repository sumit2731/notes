import {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        };
    }
    /**
     * @Desc Error bounday is class based component which implements componentDidCatch.The componentDidCatch lifecycle 
     * method can be added to any class-based component,and whenever you do add it to a class-based component,it makes
     * that class-based component an error boundary.
     * 
     * this lifecycle method will be triggered whenever one of the child components throws an error or generates an error.
     */
    componentDidCatch(error) {
        console.log(error);
        this.setState({
            hasError: true
        });
    }

    render() {
        if(this.state.hasError) {
            return <p>Something Went Wrong</p>
        }
        return this.props.childern;
    }
}

export default ErrorBoundary;