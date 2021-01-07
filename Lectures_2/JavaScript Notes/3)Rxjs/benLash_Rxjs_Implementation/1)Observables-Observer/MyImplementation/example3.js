class DataSource {

    constructor() {
        let i = 0;
        this.intervalId = setInterval(() => {
            this.emit(i++);
        }, 1000);
    }

    emit(n) {
        const LIMIT = 10;
        if (this.ondata) {
            this.ondata(n);
        }
        if (n == LIMIT) {
            if (this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }

    destroy() {
        clearInterval(this.intervalId);
    }
}

class SafeObserver {
    constructor(observer) {
        this.destination = observer;
    }

    next(value) {
        console.log("Next in Observer called");
        if (!this.unsubscribed && this.destination.next) {
            try {
                this.destination.next(value);
            }
            catch {
                this.unsubscribe();
            }
        }
    }

    error(value) {
        if (!this.unsubscribed && this.destination.error) {
            try {
                this.destination.error(value);
            }
            catch (e2) {
                this.unsubscribe();
                throw e2;
            }
            this.unsubscribe();
        }
    }

    complete() {
        if (!this.unsubscribed && this.destination.complete) {
            try {
                this.destination.complete();
            }
            catch (e2) {
                this.unsubscribe();
            }
            this.unsubscribe();
        }
    }

    unsubscribe() {
        this.unsubscribed = true;
        if (this.unsub) {
            this.unsub();
        }
    }
}


class Observable {
    constructor(_subscribe) {
        this._subscribe = _subscribe;
    }

    subscribe(observer) {
        let safeObserver = new SafeObserver(observer);
        return this._subscribe(safeObserver);
    }
}


let myObservable = new Observable(observer => {
    const dataSource = new DataSource();
    dataSource.ondata = (n) => observer.next(n);
    dataSource.onerror = (error) => observer.error(error);
    dataSource.oncomplete = () => observer.complete();
    observer.unsub = () => {dataSource.destroy()};
    return observer.unsubscribe.bind(observer);
});





let unsub = myObservable.subscribe({
    next: (val) => {
        console.log(`Next callled ${val}`);
    },
    error: (val) => {
        console.log(`Errorcallled ${val}`);
    },
    complete: () => {
        console.log(`Complete callled`);
    }
});

setTimeout(() => {
    unsub();
},5000);

