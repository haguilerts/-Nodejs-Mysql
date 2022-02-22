import {Router}from 'express'
import {indexControllers} from '../controllers/indexControllers'
class IndexRouter{
    public router:Router=Router()
    constructor(){
        this.config()
    }
    conet(req:Request,res:Response ) {
        indexControllers.index
    }
    config():void{
       this.router.get('/', indexControllers.index)
    }
}
//(req,res)=> res.send('hello')
const indexRouter=new IndexRouter()
export default indexRouter.router