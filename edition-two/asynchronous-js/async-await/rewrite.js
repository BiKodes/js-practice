fetch('coffee.jpg')
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    } else {
        return response.blob();
    }
})

.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})

.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message)
});


// convert to use async/await 

async function myFetch() {

    try { let response = await fetch('coffee.jpg');

    if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
    } else {
        let myBlob = await response.blob();

        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;

        document.body.appendChild(image);
    }
} catch(e) {
    console(e);
}
}

myFetch()


// Refactored code to use a hybrid approach of promises and await:

async function myFetch() {
    
    let response = await fetch('coffee.jpg');

    if (!response.ok) {

        throw new Error(`HTTP error! status: ${response.status}`);
    }else {
        return await response.blob();
    }

}

myFetch().then((blob) => {

    let objectURL = URL.createObjectURL(blob);

    let image = document.createElement('img');

    image.src = objectURL;

    document.body.appendChild(image);

})

.catch(e => 
    console.log(e));


// you just need to add an await keyword before the method call, and then assign the result to a variable.