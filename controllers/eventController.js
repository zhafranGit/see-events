const Joi = require('joi') //use joi validation npm
const errorHandler = require('../utils/error-handler') //error handler
const { Event, Category, Comment, User } = require('../models') // use models
const { Op } = require("sequelize") //use Op from Sequelize
const moment = require('moment') //use moment npm

module.exports = {
  getEvents: async (req, res) => { //! events
    const {
      limit,
      category,
      order,
      date,
      keywords
    } = req.query //get query params
    try {
      //LOGIC QUERY PARAMS
      //check query limit
      let limitQuery;
      if (limit) {
        limitQuery = Number(limit)
      } else {
        limitQuery = 8 //default limit 8
      }
      //check query sort
      let sort;
      switch (order) {
        case "date":
          sort = ["eventDate", "ASC"];
          break;
        case "name":
          sort = ["title", "ASC"];
          break;
        default:
          sort = ["eventDate", "ASC"];
      }
      //check query date
      let dateQuery, start, end;
      switch (date) {
        case "today":
          start = moment().startOf("day").toDate();
          end = moment().endOf("day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "tomorrow": //day + 1
          start = moment().add(1, "day").startOf("day").toDate();
          end = moment().add(1, "day").endOf("day").add(1, "day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "week": //starts from monday
          start = moment().startOf("week").add(1, "day").toDate();
          end = moment().endOf("week").add(1, "day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "month": //starts from date 1 00:00 PM
          start = moment().startOf("month").toDate();
          end = moment().endOf("month").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "year":
          start = moment().startOf("year").toDate();
          end = moment().endOf("year").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
      }
      //check query category
      let categoryQuery;
      if (category) {
        categoryQuery = {
          categoryName: category,
        };
      }
      //check keywords
      let keywordsQuery;
      if (keywords) {
        keywordsQuery = {
          title: {
            [Op.like]: `%${keywords}%` //use where like % % clause to get title where contains the keywords
          }
        }
      }
      //get events from database
      const events = await Event.findAll({
        limit: limitQuery,
        order: [sort],
        include: [ //join table
          {
            model: Category,
            as: "category",
            attributes: {
              exclude: ["id", "createdAt", "updatedAt"],
            },
            where: {
              ...categoryQuery //use spread operator to prevent undefined variable if queries are null
            }
          },
        ],
        where: { //use spread operator to prevent undefined variable if queries are null
          ...dateQuery,
          ...keywordsQuery
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        }
      })
      //if events data are empty
      if (events.length == 0) {
        return res.status(404).json({
          status: "Not Found",
          message: "No data found, table is empty",
          result: {}
        })
      }
      //response success
      res.status(200).json({
        status: "OK",
        message: "Successfully retrieve the data",
        result: events
      })
    } catch (error) {
      errorHandler(res, error)
    }
  },
  getEventDetail: async (req, res) => { //! event detail
    const {
      eventId: id
    } = req.params //get params
    try {
      // get spesific event details by eventId
      const event = await Event.findOne({
        where: {
          id
        },
        include: [{
          model: Comment,
          as: "comment"
        }],
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
      })
      //if event is not found
      if (!event) {
        return res.status(404).json({
          status: "Not Found",
          message: "Cannot find an event with id " + id,
          result: {}
        })
      }
      //response success
      return res.status(200).json({
        status: "OK",
        message: "Successfully retrieve the data",
        result: event
      })
    } catch (error) {
      console.log(error)
      errorHandler(res, error)
    }
  },
  getComments: async (req, res) => {

  }
}