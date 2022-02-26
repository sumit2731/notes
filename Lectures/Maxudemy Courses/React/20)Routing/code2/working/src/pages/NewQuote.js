import {useHistory} from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm';


const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        history.push('/quotes');
    }
    return (
        <QuoteForm onAddQuote = {addQuoteHandler}></QuoteForm>
    );
}

export default NewQuote;