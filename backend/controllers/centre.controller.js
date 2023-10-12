import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getCentre = async (req, res, next) => {
    const centre = await prisma.centre.findMany({
        include: {
            terrains: true
        }
    })
    res.status(200).json(centre)
}

const createCentre = async (req, res, next) => {
    const centre = await prisma.centre.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(centre)
}

const getCentreById = async (req, res, next) => {
    const centre = await prisma.centre.findUnique({

        where: {
            id_centre: req.params.id
        }
    })
    res.status(200).json(centre)
}

const deleteCentre = async (req, res, next) => {
    const centre = await prisma.centre.delete({
        where: {
            id_centre: req.params.id
        }
    })
    res.status(200).json(centre)
}

const updateCentre = async (req, res, next) => {
    const centre = await prisma.centre.update({
        data: {
            ...req.body
        },
        where: {
            id_centre: req.params.id
        }
    })
    res.status(200).json(centre)
}



export { getCentre, getCentreById, deleteCentre, updateCentre, createCentre }



