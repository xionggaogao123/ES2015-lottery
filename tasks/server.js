import gulp from 'gulp'
import gulpif from 'gulp-if'
import liveServer from 'gulp-live-server'
import args from './util/args'

gulp.task('serve', (cb)=>{
    if(!args.watch) return cb()

    var server = liveServer.new(['--harmony', 'server/bin/www'])
    server.start()

    gulp.watch(['server/public/**/*.js', 'server/views/**/*.ejs'], (file)=>{
        server.notify.apply(server,[file])
    })

    gulp.watch(['server/routes/**/*.js', 'server/app.js'], ()=> {
        server.start.bind(server)()
    })
})