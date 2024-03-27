if (process.env.NODE_ENV !== 'production'){
    require('dotenv').load
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=a4403e55'

console.log(stripeSecretKey,stripePublicKey)




const express=require('express')
const app = express()
const fs=require('fs')

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/store',function(req,res){
    fs.readFile('items.json',function(error,data){
        if (error){
            res.status(500).end()
        }else{
            res.render('store.ejs',{
                stripePublicKey:stripePublicKey,
                items:JSON.parse(data)
            })
        }
    })
})

app.listen(3006)

