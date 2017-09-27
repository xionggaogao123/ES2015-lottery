{
    let firName = 'ankang'
    let lastName = 'lee'

    function getName() {
        console.log(lastName, firName)
    }

    let es6 = { firName, lastName, getName, show(){
        console.log('show ...')
    } }

    console.log(es6)
    console.log(es6.getName())
}

{
    let name= 'show'
    let obj = {
        [name]: 'c' // 属性表达式
    }

    console.log(obj)

}

{
    console.log(Object.is('abc', 'abc'))
    console.log(Object.is({}, {}))
    console.log(Object.is([], []))
    console.log(Object.is(undefined, undefined))
}

{
    let obj = {firName:'lee'}
    let clone = {lastName: 'ankang'}

    console.log(Object.assign(clone, obj))
}