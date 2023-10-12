import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getCandidats = async (req, res, next) => {
    const candidats = await prisma.candidat.findMany({
        
    })
    res.status(200).json(candidats)
}

const createCandidats = async (req, res, next) => {
    const candidats = await prisma.candidat.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(candidats)
}

const getCandidatsById = async (req, res, next) => {
    const candidats = await prisma.candidat.findUnique({

        where: {
            id_candidat: req.params.id
        }
    })
    res.status(200).json(candidats)
}

const deleteCandidats = async (req, res, next) => {
    const candidats = await prisma.candidat.delete({
        where: {
            id_candidat: req.params.id
        }
    })
    res.status(200).json(candidats)
}

const updateCandidats = async (req, res, next) => {
    const candidats = await prisma.candidat.update({
        data: {
            ...req.body
        },
        where: {
            id_candidat: req.params.id
        }
    })
    res.status(200).json(candidats)
}



export {getCandidats, getCandidatsById, deleteCandidats, updateCandidats, createCandidats }