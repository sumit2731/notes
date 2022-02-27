import {useEffect} from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import {getAllQuotes} from '../lib/api';

// const DUMMY_QUOTES = [
//     {id: 'q1', author: 'Max', text: 'Learning React is Fun'},
//     {id: 'q2', author: 'Max2', text: 'Learning React is Great'}
// ];
const AllQuotes = () => {
    const {sendRequest, status, data:loadedQuotes, error} = useHttp(getAllQuotes);
    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if(status === 'pending') {
        return (
            <div className ='centered'>
                <LoadingSpinner></LoadingSpinner>
            </div>
        );
    }
    
    if(error) {
        return (
            <p className='centered focusd'>
                {error}
            </p>
        );
    }

    if(status === 'completed' && (!loadedQuotes ||loadedQuotes.length === 0)) {
        return (
            <NoQuotesFound></NoQuotesFound>
        );
    }
    return (
        <QuoteList quotes={loadedQuotes}></QuoteList>
    );
}

export default AllQuotes;