// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method === "GET"){
    handleGet(req, res)
  }else{
    res.status(405).send("Method not allowed...")
  }
}

function handleGet(req, res){
  res.status(200).json({
    id: 3,
    nome: 'Maria',
    email: 'maria@mail.com',
  })
}
