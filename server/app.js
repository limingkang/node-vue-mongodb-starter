import express from 'express';
//连接数据库
import db from './mongodb/db.js';
// config-lite 是一个轻量的读取配置文件的模块。config-lite 会根据环境变量（NODE_ENV）的不同从当前执行进程目录下的 config 目录
// 加载不同的配置文件。如果不设置 NODE_ENV，则读取默认的 default 配置文件，如果设置了 NODE_ENV，则会合并指定的配置文件和 default
// 配置文件作为配置，config-lite 支持 .js、.json、.node、.yml、.yaml 后缀的文件
import config from 'config-lite';
import router from './routes/index.js';
import cookieParser from 'cookie-parser'
import session from 'express-session';
//该模块用于将session存入mongo中
import connectMongo from 'connect-mongo';
import winston from 'winston';
import expressWinston from 'express-winston';
import path from 'path';
import history from 'connect-history-api-fallback';
import Statistic from './middlewares/statistic'

const app = express();

app.all('*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", req.headers.origin || '*');
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  	res.header("Access-Control-Allow-Credentials", true); //可以带cookies
	res.header("X-Powered-By", '3.2.1')
	if (req.method == 'OPTIONS') {
	  	res.send(200);
	} else {
	    next();
	}
});

// 向Statis数据集中写入请求记录
app.use(Statistic.apiRecord)
// 在登录的时候将session存入数据库；还可根据session进行页面拦截
const MongoStore = connectMongo(session);
app.use(cookieParser());
app.use(session({
	  	name: config.session.name,
		secret: config.session.secret,
		resave: true,
		saveUninitialized: false,
		cookie: config.session.cookie,
		store: new MongoStore({
	  	url: config.url
	})
}))

// 记录正常请求的日志
app.use(expressWinston.logger({
    transports: [
        new (winston.transports.Console)({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/success.log'
        })
    ]
}));
// 路由的位置一定要正常请求和错误请求之间
router(app);
// 记录错误请求的日志
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
          json: true,
          colorize: true
        }),
        new winston.transports.File({
          filename: 'logs/error.log'
        })
    ]
}));

//比如我使用vue-router, 访问http://localhost:9090，发现显示home，点击Go to Foo，显示foo，地址栏变为http://localhost:9090/foo，一切正常
//这时候刷新当前页面(ctrl+R或ctrl+command+R或点击浏览器的刷新按钮或在地址栏上再敲一下回车)，发现404
//使用了connect-history-api-fallback middleware会将地址重新定位到根路由/下面，他还有很多配置可以rewrite，指定默认index页等
app.use(history());
app.use(express.static('./public'));
app.listen(config.port);