import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getSport = async (req, res, next) => {
    const sport = await prisma.sport.findMany({
       
        include:{
            choix:true
        }
    })
    res.status(200).json(sport)
}

const createSport = async (req, res, next) => {
    const sport = await prisma.sport.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(sport)
}

const getSportById = async (req, res, next) => {
    const sport = await prisma.sport.findUnique({

        where: {
            id_sport: req.params.id
        }
    })
    res.status(200).json(sport)
}

const deleteSport = async (req, res, next) => {
    const sport = await prisma.sport.delete({
        where: {
            id_sport: req.params.id
        }
    })
    res.status(200).json(sport)
}

const updateSport = async (req, res, next) => {
    const sport = await prisma.sport.update({
        data: {
            ...req.body
        },
        where: {
            id_sport: req.params.id
        }
    })
    res.status(200).json(sport)
}



export { getSport, getSportById, deleteSport, updateSport, createSport}