// You can use recursive setTimeout() calls to run a function repeatedly in a similar fashion to setInterval():

let i = 1;

setTimeout(function run() {

    console.log(i);

    i++;

    setTimeout(run, 100);
}, 100);