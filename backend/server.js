import express from 'express';
import mongoose from 'mongoose'
import data from './data.js'
import userRouter from './routers/userRouter'

const app = express();
mongoose.connect('mongodb://localhost/barakanoor_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use('/api/users', userRouter)

app.get('/api/product/:id', (req, res)=>{
    const product = data.products.find( (x) => x.id == req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product not Found'})
    }
})

app.get('/api/products', (req, res)=>{
    res.send(data.products);
})

app.get('/', (req, res)=>{
    res.send('server is ready!')
});

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log(`server at http://localhost:${port}`);
})