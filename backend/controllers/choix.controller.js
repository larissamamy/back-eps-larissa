import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getChoix = async (req, res, next) => {
    const choix = await prisma.choix.findMany({
    
    })
    res.status(200).json(choix)
}

const createChoix = async (req, res, next) => {
    const choix = await prisma.choix.create({
        data: {
            ...req.body
        }
    })
    res.status(200).json(choix)
}

const getChoixById = async (req, res, next) => {
    const choix = await prisma.choix.findUnique({

        where: {
            id_choix: req.params.id
        }
    })
    res.status(200).json(choix)
}

const deleteChoix = async (req, res, next) => {
    const choix = await prisma.choix.delete({
        where: {
            id_choix: req.params.id
        }
    })
    res.status(200).json(choix)
}

const updateChoix = async (req, res, next) => {
    const choix = await prisma.choix.update({
        data: {
            ...req.body
        },
        where: {
            id_choix: req.params.id
        }
    })
    res.status(200).json(choix)
}



export { getChoix, getChoixById, deleteChoix, updateChoix, createChoix }