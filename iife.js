// Immediately Invoked Function Expressions (IIFE)
//used to global scope ke variables and pollution ko hatane ke liye


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')