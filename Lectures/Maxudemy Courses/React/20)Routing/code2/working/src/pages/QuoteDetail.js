import {Fragment} from 'react';
import {useParams, Route, Link,useRouteMatch} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
    {id: 'q2', author: 'Max2', text: 'Learning React is Great'}
];

const QuoteDetail = () => {
    const match = useRouteMatch();
    const params = useParams();
    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId);
    if(!quote) {
        return (
            <p>No Content Found</p>
        );
    }
    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author = {quote.author}></HighlightedQuote>
            
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