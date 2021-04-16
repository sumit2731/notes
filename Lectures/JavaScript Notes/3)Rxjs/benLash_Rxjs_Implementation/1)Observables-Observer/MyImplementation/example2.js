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

class SafeObservable {
    constructor(observer) {
        this.destination = observer;
    }

    next(value) {
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
            catch(e2) {
                this.unsubscribe();
                throw e2;
            }
            this.unsubscribe();
        }
    }

    complete() {
        if(!this.unsubscribed && this.destination.complete) {
            try {
                this.destination.complete();
            }
            catch(e2) {
                this.unsubscribe();
            }
            this.unsubscribe();
        }
    }
    
    unsubscribe() {
        this.unsubscribed = true;
        if(this.unsub) {
            this.unsub();
        }
    }
}

function myObservable(observer) {
    const safeObserver = new SafeObservable(observer);
    const dataSource = new DataSource();
    dataSource.ondata = (n) => safeObserver.next(n);
    dataSource.onerror = (error) => safeObserver.error(error);
    dataSource.oncomplete = () => safeObserver.complete();
    safeObserver.unsub = () => {
        dataSource.destroy();
    }
    return () => {
        safeObserver.unsubscribe(safeObserver);
    }
}



let unsub = myObservable({
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