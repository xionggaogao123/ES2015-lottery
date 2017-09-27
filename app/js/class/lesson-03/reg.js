{
	let regex = new RegExp('xyz', 'i');
	let regex2 = new RegExp(/xyz/i);
	
	console.log(regex.test("xyz123"), regex2.test('xyz123'));
	
	let regex3 = new RegExp(/xyz/ig, 'i'); // 覆盖前面的修饰符
	console.log(regex3.flags) // 获取修饰符
}

{
	let s = 'bbb_bb_b'

	let reg = /b+/g
	let reg2 = /b+/y
	
	console.log('one', reg.exec(s), reg2.exec(s))
	console.log('two', reg.exec(s), reg2.exec(s)) // sticky属性
	
	console.log(reg.sticky, reg2.sticky)
}

{
	console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
	console.log('u-2', /^\uD83D/u.test('\uD83D\uDC2A'));
	
	console.log(/\u{61}/.test('a'))
	console.log(/\u{61}/u.test('a'))
	
	console.log(`\u{20BB7}`)
	
	let s = '𠮷'
	console.log('u', /^.$/.test(s))
	console.log('u', /^.$/u.test(s))
	// PS: 有的字符大于两个字节，需要使用u修饰符
	
	console.log('test', /𠮷{2}/.test('𠮷𠮷'))
	console.log('test', /𠮷{2}/u.test('𠮷𠮷'))
}
