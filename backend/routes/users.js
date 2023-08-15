import express from 'express'
import {updateUser, deleteUser, getSingleUser, getAllUser} from '../controllers/userController.js'

const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

//upadte user
router.put('/:id', verifyUser, updateUser)

// delete user
router.delete('/:id', verifyUser, deleteUser)

//getSingle user
router.get('/:id',verifyUser,getSingleUser)

//getAll user
router.get('/', verifyAdmin, getAllUser)

export default router