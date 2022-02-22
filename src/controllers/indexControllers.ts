import {Request, Response} from 'express'

class IndexControllers{
    public index (req:Request,res:Response){
        res.send('hello')        
    }
}
export const indexControllers =new IndexControllers()