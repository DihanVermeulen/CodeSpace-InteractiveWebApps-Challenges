let data = {
    "name": "Mpho",
    "surname": "Beki",
    "interests": ["hockey", "volleybal", "tennis"],
    "DOB": "1982/04/17",
    "no.": "082.909.9182"
}

let jsonData = JSON.stringify(data);
let parsedData = JSON.parse(jsonData, (key, value) => 
{
    if (key == "DOB") {
        return new Date(value);
    }
    else {
        return value;
    };
});

console.log(jsonData);
console.log(parsedData);

localStorage.setItem("jsonObject", JSON.stringify(parsedData));