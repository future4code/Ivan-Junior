import app from "./app"
import createUser from './endpoints/createUser'
import { getAdressInfo } from "./service/getAdressInfo"

app.post('/users/signup', createUser)

getAdressInfo(30330100)
    .then(console.log)
    .catch(console.log)