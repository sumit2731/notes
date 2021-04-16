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
        if(n == LIMIT) {
            if(this.oncomplete) {
                this.oncomplete();
            }
            this.destroy();
        }
    }
    
    destroy() {
        clearInterval(this.intervalId);
    }
}

function Observable(observer) {
    const dataSource = new DataSource();
    dataSource.ondata = (n) => observer.next(n); 
    dataSource.onerror = (n) => observer.error(n);
    dataSource.oncomplete = (n) => observer.complete(n);
    return () => { dataSource.destroy() };
}

let myObservable = Observable({
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