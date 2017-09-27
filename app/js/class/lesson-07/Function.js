{
    function fun(x, y = 'default') {
        console.log(x, y)
    }
    fun('see')
    fun('see', 'you')
}

{
    let x = 'x';
    function fun(x, y = x) {
        console.log(x, y)
    }
    fun()
    fun('y') // y y
}

{
    function fun(...args) {
        console.log(args)
    }
    fun(1, 2, 3, 4)
}

{
    console.log(...[1, 2, 3])
} 

{
    const arrow = v => v * 2;
    console.log(arrow(2))
}

{
    function tail(){
        console.log('tail')
    }

    function fun(){
        console.log('fun')
        tail() // 最后一句
    }

    fun()
}