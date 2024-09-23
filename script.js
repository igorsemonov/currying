
function multiply(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        }
    }
};
console.log(multiply(2)(3)(6));

// -----------------------------------------------

const intSummary = a => b => c => d => a + b + c + d;
console.log(intSummary(5)(10)(15)(3));