//callback approach
// const getPuzzle = (wordCount,callback) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 
//     `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             callback(undefined,data.puzzle);
//         } else if (e.target.readyState === 4) {
//             callback('An Error has taken place', undefined);
//         }
//     });
// }

// XMLHttpRequest approach
// const getPuzzle = (wordCount) => new Promise( (resolve,reject)=> {
//     const request = new XMLHttpRequest();
//     request.open('GET',
//         `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place  ');
//             // callback('An Error has taken place', undefined);
//         }
//     });
// })

//fetch api approch
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json();
//             }
//             else {
//                 throw new Error(`Something went wrong`);
//             }
//         }).then((data) =>  data.puzzle);
// };

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
       const data = await response.json();
       return data.puzzle;
        // return response.json().puzzle;
    }
    else {
        throw new Error(`Something went wrong`);
    } 
};


const getPuzzleSync = (callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://puzzle.mead.io/puzzle',false);
    request.send();
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(e.target.responseText);
      return data.puzzle;
    } else if (e.target.readyState === 4) {
      throw new Error('The Error Occured');
    }
   }

// const getCountry = (countryCode) => {
//     return fetch(`https://restcountries.eu/rest/v2/all`)
//         .then(response => {
//             if (response.status === 200) {
//                 return response.json();
//             } else {
//                 throw new Error('Unable to fetch');
//             }
//         })
//         .then(data => {
//             return data.find(country => country.alpha2Code === countryCode);
//         });
// };

// async/await approach

const getCountry = async (countryCode) => {
  const response = await fetch(`https://restcountries.eu/rest/v2/all`);
  if (response.status === 200) {
    const data = await response.json();
      return data.find(country => country.alpha2Code === countryCode);
  }else {
    new Error('Unable to find country');
  }
};

// const getLocation = () => {
//     return fetch(`https://ipinfo.io/json?token=1a11bd55cc8f9c`)
//       .then(response => {
//         if (response.status === 200) {
//           return response.json();
//         } else {
//           throw new Error("Unable to fetch");
//         }
//       });
// };

// async/await approach

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=1a11bd55cc8f9c`);
    if (response.status ===200) {
        const data = await response.json();
        return data;
    } else {
        new Error('Cannot get location');
    }
};




const getCurrentCountry = async () => {
    const location = await getLocation();
    const country= await getCountry(location.country);
    return country;
};

