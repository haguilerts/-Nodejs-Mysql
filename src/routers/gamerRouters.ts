import {Router}from 'express'
import {gameControllers} from '../controllers/gameControlers'

class GamesRouter{
    public router:Router=Router()
    constructor(){
        this.config()
    }
    config():void{
       this.router.get('/',gameControllers.getAll_lists)
       this.router.get('/:id',gameControllers.getlist)
       this.router.post('/', gameControllers.create)
       this.router.delete('/:id', gameControllers.delete)
       this.router.put('/:id', gameControllers.update)
    }
}
const gamesRouter=new GamesRouter()
export default gamesRouter. router