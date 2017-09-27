{
    let obj = {
        time: '2017-09-24 15:26:00',
        name: 'net',
        _r: 123
    };

    let monitor = new Proxy(obj, {
        get(target, key) {
            return target[key].replace('2017', 2018);
        },

        set(target, key, value) {
            if (key === 'name') {
                return target[key] = value;
            } else {
                return target[key];
            }
        },

        has(target, key) {
            if (key === 'name') {
                return target[key];
            } else {
                return false;
            }

        },

        deleteProperty(target, key){
            if (key.startsWith("_")) {
                delete target[key];
                return true;
            } else {
                return target[key];
            }
        },

        ownKeys(target) {
            return Object.keys(target).filter(item => item != 'time')
        }

    });

    console.log('get', monitor.time);

    monitor.time = '2019';
    monitor.name = 'imooc'
    console.log('set', monitor.time, monitor.name);

    console.log('has', 'name' in monitor, 'time' in monitor);

    delete monitor.time;
    console.log('delete', monitor);

    delete monitor._r;
    console.log('delete', monitor);

    console.log('ownKeys', Object.keys(monitor));
}

{
    let obj = {
        time: '2017-09-24 15:26:00',
        name: 'net',
        _r: 123
    };

    console.log('reflect get', Reflect.get(obj, 'time'));

    Reflect.set(obj, 'name', 'muke')
    console.log('reflect set', obj);

    console.log('reflect has', Reflect.has(obj, 'name'));
}


{
    // 校验
    function validator(target, validator) {
        return new Proxy(target, {
            _validator: validator,
            set(target, key, value) {
                if (target.hasOwnProperty(key)) {
                    let vali = this._validator[key];
                    if (!! vali(value)) {
                        return Reflect.set(target,key,value)
                    } else {
                        throw Error(`不能设置 ${key} 到 ${value}`)
                    }
                } else {
                    throw Error(`${key} 不存在`)
                }
            }
        })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },

        age(val) {
            return typeof val === 'number' && val > 18
        }
    }

    class Person{
        constructor(name, age) {
            this.name = name;
            this.age =age;

            return validator(this, personValidators)
        }
    }

    const p = new Person('lilei', 30);

    console.log('person', p);

    // p.name = 48; // 不能设置 name 到 48
    p.name = 'han meimei';
    console.log('pseron', p);
}