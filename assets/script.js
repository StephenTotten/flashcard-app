function flashCard () {
    // 

}

const number = ["0","1","2","3","4","5","6","7","8","9","10",];
const number2 = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",];
const random = Math.floor(Math.random() * number.length);
const random2 = Math.floor(Math.random() * number2.length);
console.log(random, number[random]);
console.log(random, number[random2]);