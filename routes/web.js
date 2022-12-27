import express from 'express'
const router = express.Router()

import { homecontroller } from '../controller/homecontroller.js'
import { contactcontroller } from '../controller/contactController.js'
import { skillcontroller } from '../controller/skillController.js'
import { servicescontroller } from '../controller/servicesController.js'


router.get('/',homecontroller)
router.get('/contact',contactcontroller)
router.get('/skill',skillcontroller)
router.get('/services',servicescontroller)

export default router