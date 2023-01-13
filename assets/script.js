let numbers = [];
for (var i = 0; i <= 100; i++){
    numbers.push(i);
}

function randNumber(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
    
}

console.log(randNumber(numbers));