import json from './costumers.json'
export default function handler(req, res) {
    if(req.query.id > 0 && req.query.id <= json.length){
      res.status(200).json(json.at((req.query.id -1)))
    }else{
      res.status(204).send(`ID:${req.query.id}`)
    }
      
  }