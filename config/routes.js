const express = require('express')

module.exports = function(server){

  //API routes
  const router = express.Router()
  server.use('/api', router)

  const billingCycleService = require('../api/billingCycle/billingCycleService')
  billingCycleService.register(router, '/billingCycles')
}
