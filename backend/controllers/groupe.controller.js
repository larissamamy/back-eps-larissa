import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const getGroupe = async (req, res, next) => {
    const groupe = await prisma.groupe.findMany({
        
    })
    res.status(200).json(groupe)
}

const createGroupe = async (req, res, next) => {
      const groupe = await prisma.groupe.create({
            data: {
                ...req.body
            }
        })
        res.status(200).json(groupe)
    }
 


const getGroupeById = async (req, res, next) => {
    const groupe = await prisma.groupe.findUnique({

        where: {
            id_groupe: req.params.id
        }
    })
    res.status(200).json(groupe)
}

const deleteGroupe = async (req, res, next) => {
    const groupe = await prisma.groupe.delete({
        where: {
            id_groupe: req.params.id
        }
    })
    res.status(200).json(groupe)
}

const updateGroupe = async (req, res, next) => {
    const groupe = await prisma.groupe.update({
        data: {
            ...req.body
        },
        where: {
            id_groupe: req.params.id
        }
    })
    res.status(200).json(groupe)
}



export { getGroupe, getGroupeById, deleteGroupe, updateGroupe, createGroupe }