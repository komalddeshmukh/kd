// Make HTTP request.


// Create an instance of the request
let xhr = new XMLHttpRequest();
//open your request
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = function () {
    console.log("******************Response Received***********************");
    //console.log(this.responseText);
    //the data which ypu get is not a readable data so make it readable by using the JSON parse
    let data = JSON.parse(xhr.responseText)
    //console.log(data);
    //loop through data and print it in console.log
    for (let i = 0; i < data.lenght; i++) {
        console.log(`
        Name:${data[i].name}
        Email:${data[i].email}
        `)
    }

}
xhr.send(); //send the request