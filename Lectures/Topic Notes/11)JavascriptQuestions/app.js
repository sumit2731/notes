let a = () => console.log("hello")

setTimeout(() => {
    a = () => console.log("Bye")
}, 2000)

setTimeout(() => {
    a();
},4000)