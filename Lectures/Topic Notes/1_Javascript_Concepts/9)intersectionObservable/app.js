const myDiv = document.querySelector('.container2');

observer = new IntersectionObserver((entry, observer) => {
  console.log('entry:', entry);
  console.log('observer:', observer);
},{
     rootMargin: '50px 20px 100px 30px',
});

observer.observe(myDiv);