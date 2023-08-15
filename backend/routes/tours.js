import express from 'express'
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from '../controllers/tourController.js'

import { verifyAdmin } from '../utils/verifyToken.js'


const router = express.Router()

//create new tour
router.post('/',verifyAdmin, createTour)

//upadte tour
router.put('/:id',verifyAdmin,updateTour)

// delete tour
router.delete('/:id',verifyAdmin,deleteTour)

//getSIngle tour
router.get('/:id',getSingleTour)

//getAll tour
router.get('/',getAllTour)

// get tour by search
router.get('/search/getTourBySearch', getTourBySearch)

// get featuredTour
router.get('/search/getFeaturedTours', getFeaturedTour)

// get touraCount
router.get('/search/getTourCount',getTourCount)

export default router