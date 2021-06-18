function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}
  
  // usage:
  // loadScript('path/script.js', (err, script) => {...})

  function loadScript2(src) {
      return new Promise((resolve, reject) => {
        loadScript(src, (error, result)=> {
            if(error) reject(error);
            else resolve(result);
        })   
      });
  }


function promisify(fn) {
    return function(...args) {
        return new Promise((resolve,reject) => {
            fn(...args,(error,result) => {
                if(error) reject(error);
                else resolve(result);
            })
        });
    }
}

  let loadScriptPromise = promisify(loadScript);
  loadScriptPromise(...).then(...);