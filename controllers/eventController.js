const Joi = require('joi').extend(require("@joi/date")) //use joi validation npm
const errorHandler = require('../utils/error-handler') //error handler
const { Event, Category, Comment, User } = require('../models') // use models
const { Op } = require("sequelize") //use Op from Sequelize
const moment = require('moment') //use moment npm

module.exports = {
  getEvents: async (req, res) => { //! events
    const {
      limit,
      page,
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
      //set paginations limit
      if (!page) {
        page - 1
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
          start = moment().tz("UTC").startOf("day").toDate();
          end = moment().tz("UTC").endOf("day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "tomorrow": //today + 1
          start = moment().tz("UTC").add(1, "day").startOf("day").toDate();
          end = moment().tz("UTC").add(1, "day").endOf("day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "week": //starts from monday
          start = moment().tz("UTC").startOf("week").add(1, "day").toDate();
          end = moment().tz("UTC").endOf("week").add(1, "day").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "month": //starts from date 1 00:00 PM
          start = moment().tz("UTC").startOf("month").toDate();
          end = moment().tz("UTC").endOf("month").toDate();
          dateQuery = {
            eventDate: {
              [Op.between]: [start, end]
            }
          }
          break;
        case "year":
          start = moment().tz("UTC").startOf("year").toDate();
          end = moment().tz("UTC").endOf("year").toDate();
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
        // offset: [(page - 1) * limitQuery],
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
  }
}