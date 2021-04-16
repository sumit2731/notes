const { Subject } = Rx;


let sub1 = new Subject();


sub1.subscribe(
    (val) => console.log(val),
    (err) => console.log(err),
    () => console.log("Completed")
);

sub1.next(1);
sub1.next(2);
sub1.next(3);
sub1.error();



sub1.subscribe(
    (val) => console.log(val),
    (err) => console.log(err),
    () => console.log("Completed")
);


