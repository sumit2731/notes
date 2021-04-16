const age = 7;
const message = age >= 18 ? 'You can Vote' : 'You cannot Vote';
console.log(message);

const myAge = 27;

const showPage = () => {
    console.log('Showing the  page');
};

const showErrorPage = () => {
    console.log('Showing the error page');
};

myAge >= 21 ? showPage() : showErrorPage;