const output = document.querySelector("#output");
function fizzbuzz() {
    output.innerHTML = "";
    for (var x = 1; x < 101; x++) {
        factorOf3 = x % 3;
        factorOf5 = x % 5;
        // if(factorOf5 == 0 && factorOf3 == 0) {
        //     console.log("fizzbuzz");
        // }
        // else if(factorOf3 == 0) {
        //     console.log('fizz');
        // }
        // else if(factorOf5 == 0) {
        //     console.log("buzz");
        // }
        // else {
        //     console.log(x);
        // }
        switch (true) {
            case (factorOf3 == 0 && factorOf5 == 0): console.log("FizzBuzz"); 
            output.innerHTML += "FizzBuzz <br>";
            break;
            case factorOf3 == 0: console.log("Fizz");
                output.innerHTML += "Fizz <br>";
                break;
            case factorOf5 == 0: console.log("Buzz");
                output.innerHTML += "Buzz <br>";
                break;
            default: console.log(x);
                output.innerHTML += x + "<br>";
        }
    }
}