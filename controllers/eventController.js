const Joi = require('joi')
const errorHandler = require('../utils/error-handler') //handling error
const {} = require('../models') // mengambil model

module.exports = {
  getEvents : async (req,res)=> {
    
    try {
      /* find all database , limit 8
      const events = await Laptop.findAll({
        limit :8,
        include : [ // ditambahkan dari model lain
          {
            model : <nama models>,
            as : "<models as>",
            attributes : {
              exclude : ["createdAt","updatedAt"]  // yg tidak ditampilkan
            }
          },
        ],
        attributes : {  
          exclude : ["brandId","id","createdAt","updatedAt"] // yg dikeluarkan  
        }
      }) 
      
      //jika tidak ada data yg bisa ditampilkan
      if(events.length ==0)){
        return res.status(400).json({
          status : "Failed",
          message : "No data found, database is empy",
          result : {}
        })
      }

      res.status(200).json({
        status : "Success",
        message : "Successfully retrieve the data",
        result : events
      })
     */
    } catch (error) {
      errorHandler (res,error)
    }
  },
  getEventDetail : async  (req,res) => {
    const {eventId : id} = req.params
    try {
      /* find data by eventId
      const event = await (models).findOne({
          where : {
            id,
          }
      })

      //jika data tidak ada
      if(!event) {
        return res.status(404).json({
          status : "Data Not Found",
          message : "Cannot find an event with id " + id,
          result :{}
        })
      }
      */
      return res.status(200).json({
        status : "Success",
        message : "Successfully retrieve the data",
        result : event
      })
    } catch (error) {
      errorHandler(res,error)
    }
  }
}