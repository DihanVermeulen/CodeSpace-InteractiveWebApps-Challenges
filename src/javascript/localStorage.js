let data = {
    "name": "Mpho",
    "surname": "Beki",
    "interests": ["hockey", "volleybal", "tennis"],
    "DOB": "1982/04/17",
    "no.": "082.909.9182"
}

let jsonData = JSON.stringify(data);
let parsedData = JSON.parse(jsonData, (key, value) => {
    if (key == "DOB") {
        return new Date(value);
    }
    else {
        return value;
    };
});

localStorage.setItem("jsonObject", JSON.stringify(parsedData));

let localstorageItem = localStorage.getItem("jsonObject");
let parsedlocalstorageItem = JSON.parse(localstorageItem, (key, value) => {
    switch (key) {
        case "DOB": return new Date(value);
            break;
        case "no.": return parseInt(value);
            break;
        default: return value;
    }
});


for (x in parsedlocalstorageItem) {
    document.querySelector("#output").innerHTML += x + " : " + parsedlocalstorageItem[x] + "<br>";
    console.log(x + " : " + parsedlocalstorageItem[x]);
}