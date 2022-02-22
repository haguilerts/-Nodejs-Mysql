import {json, Request, Response} from 'express'
import pool from '../database'


class GamesControllers{
    /* public async  (req:Request,res:Response){
        //res.send('games')
        const juego = await pool.query('SELECT * FROM games')
        res.json(juego)
    } */
    public async getAll_lists (req: Request, res: Response):Promise<void> {
        await pool.query('SELECT * FROM games', (err, result, fields)=> {
            if (err) throw err;
            res.json(result);
        });
    }
    public async getlist (req:Request,res:Response):Promise<any>{
        //res.send('games')
        /* pool.query('DESCRIBE games')
        res.json( `opteniiendo el juegos N° ${req.params.id} `)) */
        const {id}=req.params;
        await pool.query('SELECT * FROM games WHERE id = ?', [id], (err, result, fields)=> {
            if (err) throw err;
            //console.log(req.params) //{ id: '1' }
            if(result.length>0){
                console.log(`opteniiendo el juegos N° ${req.params.id} `)
                console.log(result)
                res.status(200).json(result);
            }else{
                console.log('resultado NOOOO encontrado')
                res.status(404).json('resultado NOOOO encontrado');
            }

        });
    }
    public async create(req:Request,res:Response):Promise<void>{
        await pool.query('INSERT INTO games SET ?', [req.body], (err) => {
            if (err) throw err;
            res.json({message:'juego guardado..!'})
            //res.redirect('/')
        })
    }
    public async delete(req:Request,res:Response):Promise<void>{
        const {id}=req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id], (err, result)=> {
            if (err) throw err;
            console.log(`Eliminado el juegos N° ${req.params.id} `)
            res.json(`Eliminado el juegos N° ${req.params.id}, Exito!! `);         
        });
    }
    public async update(req:Request,res:Response):Promise<void>{
        //res.json({text:'actualizando un juego '+req.params.id})
        const {id}=req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body,id], (err, result)=> {
            if (err) throw err;
            console.log(`El juegos  N° ${req.params.id} fue ACTUALIZADO `)
            res.json(`El juegos  N° ${req.params.id} fue ACTUALIZADO con Exito!! `);         
        });
    }
}
export const gameControllers =new GamesControllers()