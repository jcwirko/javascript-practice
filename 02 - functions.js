var a = 23;

function aa() {
    a = 53;
    console.log(a)
}

function bb() {
    var b = 53;
    console.log(a)
}

//test();

/*******
 ******* SCOPE
 *******/

function outer() {
    var a = 1;

    function inner() {
        var b = 2;
        // we can access both `a` and `b` here
        console.log(a + b); // 3
    }

    inner();
    // we can only access `a` here
    console.log(a); // 1
}

outer();