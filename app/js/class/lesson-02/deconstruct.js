{
    let a, b, rest
    [a, b, ...rest] = [1, 2, 3, 4, 5]
    console.log(a, b, rest)
}

{
    let a, b
    ({a,b} = {a:1, b:2})
    console.log(a, b)
}

{
    let a, b, c 
    ({a, b, c = 3} = {a:1, b:2})
    console.log(a, b, c)
}

{
    let a = 1;
    let b = 2;

    [a, b] = [b, a]

    console.log(a, b)
}

{
    function f() {
        return [1, 2]
    }
    let a, b

    [a, b] = f()

    console.log(a, b)
}

{
    function f() {
        return [1,2,3,4]
    }
    let a, b, c;
    [a, , b, c] = f()

    console.log(a, b)
}

{
    function f() {
        return [1,2,3,4]
    }
    let a, b, c;
    [a, , b, c] = f()

    console.log(a, b)
}

{
    let obj = {p:42, q:true};
    let {p, q} = obj
    console.log(p, q)
}
