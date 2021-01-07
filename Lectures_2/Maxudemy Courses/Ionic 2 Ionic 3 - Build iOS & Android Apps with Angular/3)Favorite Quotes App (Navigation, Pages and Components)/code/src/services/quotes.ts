import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }
    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl:Quote) => quoteEl.id === quote.id);
        this.favoriteQuotes.splice(position,1);
    }
    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();
    }
}