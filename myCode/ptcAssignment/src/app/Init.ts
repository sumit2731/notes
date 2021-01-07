import { MyServiceService } from './my-service.service';

export function initApp(service: MyServiceService) {
    return () => new Promise((resolve, reject) => {
        console.log("Wait for promise to resolve");
        setTimeout(() => {
            resolve(100);
        }, 5000);
    }).then((value: number) =>{
        console.log(value);
        service.result = value;
    });
}