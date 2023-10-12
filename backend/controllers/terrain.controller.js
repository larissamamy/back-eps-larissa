import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getTerrain = async (req, res, next) => {
    const terrain = await prisma.terrain.findMany({
        include:{
            centre:true
        }
    })
    res.status(200).json(terrain)
}

const createTerrain = async (req, res, next) => {
    const terrain = await prisma.terrain.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(terrain)
}

const getTerrainById = async (req, res, next) => {
    const terrain = await prisma.terrain.findUnique({

        where: {
            id_terrain: req.params.id
        }
    })
    res.status(200).json(terrain)
}

const deleteTerrain = async (req, res, next) => {
    const terrain = await prisma.terrain.delete({
        where: {
            id_terrain: req.params.id
        }
    })
    res.status(200).json(terrain)
}

const updateTerrain = async (req, res, next) => {
    const terrain = await prisma.terrain.update({
        data: {
            ...req.body
        },
        where: {
            id_terrain: req.params.id
        }
    })
    res.status(200).json(terrain)
}



export { getTerrain, getTerrainById, deleteTerrain, updateTerrain, createTerrain }



