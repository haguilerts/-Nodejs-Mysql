import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors'

import indexRouters from './routers/indexRouters';
import gamerRouters from './routers/gamerRouters';

class Server{
    public app:Application
    constructor(){
        this.app=express()
        this.config()
        this.router()
    }
    config():void{
        this.app.set('port', process.env.PORT || 3200)
        this.app.use(morgan('dev'))
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
    }
    router():void{
        this.app.use('/',indexRouters)
        this.app.use('/api/anime',gamerRouters)
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log(` Server on port ${this.app.get('port')} : http://localhost:3200/`)
        });
    }

}
const server=new Server();
server.start(); 