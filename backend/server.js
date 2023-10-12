import express from "express"
import centre_router from "./routes/centre.route.js"
import terrain_router from "./routes/terrain.route.js"
import candidats_router from "./routes/candidats.route.js"
import examinateur_router from "./routes/examinateur.route.js"
import groupe_router from "./routes/groupe.route.js"
import sport_router from "./routes/sport.route.js"
import choix_router from "./routes/choix.route.js"
import utilisateur_router from "./routes/utilisateur.route.js"

const server = express()

const PORT = process.env.PORT || 5000

server.use(express.json())
server.use('/centre', centre_router)
server.use('/terrain', terrain_router)
server.use('/candidats', candidats_router)
server.use('/examinateur', examinateur_router)
server.use('/groupe', groupe_router)
server.use('/sport',sport_router)
server.use('/choix',choix_router)
server.use('/utilisateur',utilisateur_router)







server.listen(PORT , console.log("SERVER RUNNING"))
