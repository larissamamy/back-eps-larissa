import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getExaminateur = async (req, res, next) => {
    const examinateur = await prisma.examinateur.findMany({
        
    })
    res.status(200).json(examinateur)
}

const createExaminateur = async (req, res, next) => {
    const examinateur = await prisma.examinateur.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(examinateur)
}

const getExaminateurById = async (req, res, next) => {
    const examinateur = await prisma.examinateur.findUnique({

        where: {
            id_examinateur: req.params.id
        }
    })
    res.status(200).json(examinateur)
}

const deleteExaminateur = async (req, res, next) => {
    const examinateur = await prisma.examinateur.delete({
        where: {
            id_examinateur: req.params.id
        }
    })
    res.status(200).json(examinateur)
}

const updateExaminateur = async (req, res, next) => {
    const examinateur = await prisma.examinateur.update({
        data: {
            ...req.body
        },
        where: {
            id_examinateur: req.params.id
        }
    })
    res.status(200).json(examinateur)
}



export { getExaminateur, getExaminateurById, deleteExaminateur, updateExaminateur, createExaminateur }