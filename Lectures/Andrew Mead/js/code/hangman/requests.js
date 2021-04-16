const getPuzzle = (wordCount,callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', 
    `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined,data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An Error has taken place', undefined);
        }
    });
}




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


