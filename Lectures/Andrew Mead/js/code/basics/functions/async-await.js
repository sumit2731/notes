const getDataPromise = num =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === "number" ? resolve(num * 2) : reject("Number Must be provided");
            // reject('This is error');
        }, 2000);
    });

const processData = async () => {
  let data = await getDataPromise('two');
  data = await getDataPromise(data);
 return data;
};

processData()
    .then(data => {
        console.log('Data',data);
    })
    .catch(error => {
        console.log('Error', error);
    });
