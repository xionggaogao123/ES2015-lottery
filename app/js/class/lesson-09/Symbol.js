{
    let a1 = Symbol()
    let a2 = Symbol()
    let a3 = Symbol.for('a3')
    let a4 = Symbol.for('a3')

    console.log(a2)
    console.log(a1 === a2)

    console.log(a4)
    console.log(a3 === a4)
}

{
    let a1 = Symbol.for('abc')
    let obj = {
        [a1]: '123',
        'abc': 456,
        c: 3

    }

    console.log(obj)

    for(let [key, value] of Object.entries(obj)){
        console.log(key, value) // 无法遍历 [a1]: '123',
    }

    Object.getOwnPropertySymbols(obj).forEach(item => console.log(obj[item]))

    console.log('reflect...')
    Reflect.ownKeys(obj).forEach(item=> console.log(item, obj[item]))
}