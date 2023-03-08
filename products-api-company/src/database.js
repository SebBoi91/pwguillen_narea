import mongoose from 'mongoose'

mongoose.connect ("mongodb+srv://jguillenn1:OSIsoyhermoso8@cluster0.2gf1b4l.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))
