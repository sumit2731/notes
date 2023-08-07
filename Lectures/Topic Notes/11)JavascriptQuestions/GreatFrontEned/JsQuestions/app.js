let timeoutRef = setTimeout(() => console.log("hello"), 200);
setTimeout(() => console.log(timeoutRef), 300);