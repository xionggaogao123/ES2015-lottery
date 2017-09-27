{
    console.log('a', `\u0061`)
    console.log('s', `\u20BB7`) // 超过0xffff

    console.log('s', `\u{20BB7}`)
}


{
    let s = '𠮷'
    console.log('len', s.length)
    // ES5
    console.log('0', s.charAt(0))
    console.log('1', s.charAt(1))

    console.log('0', s.charCodeAt(0))
    console.log('1', s.charCodeAt(1))

    let s2 = '𠮷a'
    console.log('len', s2.length)
    console.log('code0', s2.codePointAt(0))
    console.log('code0', s2.codePointAt(0).toString(16))

    console.log('code1', s2.codePointAt(1))
    console.log('code2', s2.codePointAt(2))

}

{
    console.log(String.fromCharCode("0x20BB7"))
    console.log(String.fromCodePoint("0x20BB7"))
}

{
    let str = '\u{20bb7}abc'
    for (var index = 0; index < str.length; index++) {
        console.log('es5', str[index])
    }

    for (let code of str) {
        console.log('es6', code)
    }
}

{
    let str = 'string'

    console.log('includes', str.includes('r'))
    console.log('startsWith', str.startsWith('ring'))
    console.log('endsWith', str.endsWith('ring'))
}

{
    let str = 'abc'
    console.log(str.repeat(3))
}

{
    let name = 'LeeAnkang'
    let info = 'hey'

    console.log(`${name} say ${info}`)
}

{
    // console.log('1'.padStart(2, '0')) 01
}

{
    // 处理xss攻击
    let user = {
        name: 'Lee',
        info: 'hello'
    }

    abc`i am ${user.name}, ${user.info}`

    function abc(s, v1, v2) {
        console.log(s, v1, v2)
        return s+v1+v2;
    }
}

{
    console.log(String.raw`Hi\n${1+2}`)
    console.log(`Hi\n${1+2}`)
}