const express = require('express')
const app = express()

let products = [
    {
      id:1,
      nome_produto : "TV",
      classe_produto : "eletrônicos",
      descricao: "UMA TV MANEIRUDA",
      preco : 1200,
      img:"https://images.samsung.com/is/image/samsung/africa-pt-fhd-t5300-ua32t5300auxly-frontblack-243729437?$2160_1728_PNG$"

    },
    
    {
        id:2,
        nome_produto : "PC",
        classe_produto : "eletrônicos",
        descricao: "UMA PC DO BALACOBACO",
        preco : 7500,
        img:"https://images.kabum.com.br/produtos/fotos/157435/pc-gamer-concordia-glass-i3-9100f-8gb-ddr4-ssd-120gb-hd-1tb-rx-550-4gb-fonte-500w-linux-40552_1622121615_original.jpg"
  
      },

    {
        id:3,
        nome_produto : "Headset",
        classe_produto : "periféricos",
        descricao: "Fone muito legal",
        preco : 350,
        img:"https://images.samsung.com/is/image/samsung/africa-pt-fhd-t5300-ua32t5300auxly-frontblack-243729437?$2160_1728_PNG$"
  
    },

    {
        id:4,
        nome_produto : "Cadeira",
        classe_produto : "cadeira gamer",
        descricao: "Cadeira super confortável",
        preco : 8000,
        img:"https://images.samsung.com/is/image/samsung/africa-pt-fhd-t5300-ua32t5300auxly-frontblack-243729437?$2160_1728_PNG$"
  
    },
      
  ]

  app.get('/', (request, response) => {
      response.send('<h1>TESTE HOME</h1>')
  })

  app.get('/api/products', (request, response) => {
      response.json(products)
  })

  const PORT = 3000
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })