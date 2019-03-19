import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'


console.log("Config key is", config.key);

const service = new AppService('It is Hello from AppService');

service.log();