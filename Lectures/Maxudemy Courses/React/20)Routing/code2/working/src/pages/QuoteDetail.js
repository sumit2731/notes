import {Fragment,useEffect} from 'react';
import {useParams, Route, Link,useRouteMatch} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getSingleQuote} from '../lib/api';

// const DUMMY_QUOTES = [
//     {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
//     {id: 'q2', author: 'Max2', text: 'Learning React is Great'}
// ];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const {sendRequest,status, data:loadedQuote,error} = useHttp(getSingleQuote,true);
    useEffect(()=> {
        sendRequest(params.quoteId);      
    }, [sendRequest, params.quoteId]);

    if(status === 'pending') {
        return (
            <div className= 'centered'>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }
    
    if(error) {
        return (
            <p className="centered">{error.message}</p>
        );
    }
    
    if(!loadedQuote.text) {
        return (
            <p>No Content Found</p>
        );
    }
    
    return (
        <Fragment>
            <HighlightedQuote text={loadedQuote.text} author = {loadedQuote.author}></HighlightedQuote>
            
            <Route path= {`${match.path}`} exact>
                <div className='centered'>
                    <Link className='btn--flat' to={`${match.url}/comments`}>Load Commnets</Link>
                </div>
            </Route>
            
            {
        /*   <Route path="/quotes/:quoteId/commnets">
                <Comments></Comments>
            </Route> */
            <Route path = {`${match.path}/comments`}>
                <Comments></Comments>
            </Route>
            }
        </Fragment>
    );
}

export default QuoteDetail;