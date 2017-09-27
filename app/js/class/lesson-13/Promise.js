{
    // callback function
    let ajax = function (callback) {
        setTimeout(function () {
            callback && callback.call()
        }, 1000);
    };

    console.log('start...');

    ajax(function () {
        console.log('timeout-01');
    })
}

{
    let ajax = function () {
        console.log('new start...');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })
    };

    ajax().then(function () {
        console.log('promise', 'timeout-02')
    })
}

{
    let ajax = function () {
        console.log('03 start...');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        });
    };
    ajax()
        .then(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve();
                }, 1000);
            });
        })
        .then(function () {
            console.log('timeout-03');
        });
}

{
    let ajax = function (num) {
        console.log('num...');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve();
            } else {
                throw new Error('error...')
            }
        });
    };

    ajax(6).then(function () {
        console.log('log', 6);
    }).catch((err) => console.log('cathc', err));

    ajax(3).then(function () {
        console.log('log', 3);
    }).catch((err) => console.log('cathc', err));
}

{
    // 所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function (element) {
            document.body.appendChild(element);
        }, this);
    }

    // 三张图片加载完执行showImgs
    Promise.all([
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'),
        loadImg('https://mimg.127.net/logo/163logo.gif'),
        loadImg('https://img.alicdn.com/tfs/TB14f3qbzihSKJjy0FeXXbJtpXa-520-280.jpg_q90_.webp')
    ]).then(showImgs);
}

{
    // 所有图片加载完再添加到页面
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(err);
            };
        })
    }

    function showImg(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    // 三张图片加载完执行showImgs
    Promise.race([
        loadImg('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc7652.png'),
        loadImg('https://mimg.127.net/logo/163logo.gif'),
        loadImg('https://img.alicdn.com/tfs/TB14f3qbzihSKJjy0FeXXbJtpXa-520-280.jpg_q90_.webp')
    ]).then(showImg);
}