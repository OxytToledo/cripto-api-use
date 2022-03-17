const request = require('request')
require('dotenv').config()

const app = require('express')()

const options = {
    url: `${process.env.api_url}`,
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
    }
}

let dolarValue = ''

const dolar = function(err, data, res) {
    let json = JSON.parse(res)
    price = json.USDBRL['bid']
    date = json.USDBRL['create_date']
    dolarValue = `Dolar Price: R$ ${price} | Date: ${date}`
}
request(options, dolar)

app.get('/getdolar', (req, res) => {
    res.json(dolarValue).status(200)
})

app.listen(4002, () => {console.log('Backend executing in 4002')})