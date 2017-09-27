{
    function test() {
        for (let index = 0; index < 3; index++) {
           console.log(index)
        }
        // console.log(i) // Uncaught ReferenceError: i is not defined
    }
    test()
}

{
    let a = 1
    // let a = 2; // Duplicate declaration "a"
}

{
    const PI = 3.14
    // PI = 5; //"PI" is read-only
}

{
    // const PI 
    // PI = 3.14 // Unexpected token
}