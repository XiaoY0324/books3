import { extend } from 'lodash';
import { join } from 'path';

let config = {
    'viewDir': join(__dirname, '..', '..', 'dist/views'),
    'staticDir': join(__dirname, '..', '..', '..', 'assets')
}

if (process.env.NODE_ENV === 'development') {
    const localConfig = {
        port: 8082,
        baseUrl: 'http://localhost:8080/yd-books-php-version1/web/index.php/'
    }

    config = extend(config, localConfig);
}

if (process.env.NODE_ENV === 'production') {
    const localConfig = {
        port: 80,
        baseUrl: 'http://192.168.64.2:8080/yd-books-php-version1/web/index.php/',
        result: {
            "code": 0, 
            "message": "", 
            "data": [
                {
                    "id": 1, 
                    "title": "开心麻花 title", 
                    "name": "杨帅开心麻花", 
                    "price": 500, 
                    "type": "小品", 
                    "logoPath": "https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/pic/item/8c1001e93901213f0cd8c6b358e736d12e2e95f2.jpg", 
                    "desc": "开心麻花 desc"
                }, 
                {
                    "id": 2, 
                    "title": "webpack title", 
                    "name": "webpack", 
                    "price": 100, 
                    "type": "学习", 
                    "logoPath": "https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1336933592,2823393441&fm=85&s=3293C86EEC881F7692C739810300B088", 
                    "desc": "webpack desc"
                }
            ]
        }
    }

    config = extend(config, localConfig);
}

export default config;