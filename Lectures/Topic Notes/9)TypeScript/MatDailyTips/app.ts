type seniorRole = 'manager';
type technicalRole = 'developer';

type type3 = {
    manager?: 'Free Parking';
    developer?: 'Free Coffee';
}


const benefits:  Partial<Record<seniorRole, 'Free Parking'> & Record<technicalRole, 'Free Coffee'>> = {};
benefits.manager = 'Free Parking';
benefits.developer = 'Free Parking';//ERROR: no free parking for dev


let benefits2: type3 = {};
benefits2.developer = 'sny value;'