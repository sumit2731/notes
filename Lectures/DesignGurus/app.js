console.log('A');
(async function() {
  const x = await 5; // remove await to see A,C,B
  console.log("C");
  return Promise.resolve();
})();
console.log("B");