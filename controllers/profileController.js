const errorHandler = require('../utils/error-handler') //handling error
const { Profile } = require('../models'); // mengambil model
const Joi = require('joi');

module.exports = {
    editProfile: async (req, res) => {
        const { profileId } = req.params
        const file = req.file;
        try {
            const { error } = Joi.object({ image: Joi.string() }).validate({ image: file.path })
            if (error) {
                return res.status(400).json({
                    status: "Bad Request",
                    message: error.message,
                    result: {}
                })
            }

            const update = await Profile.update({ image: file.path }, {
                where: {
                    id: profileId
                }
            })
            if (update[0] != 1) {
                return res.status(404).json({
                    status: "Data Not Found",
                    message: "There is no data with id " + profileId,
                    result: {}
                })
            }

            const profile = await Profile.findByPk(profileId);
            res.status(200).json({
                status: "Success",
                message: "Data Updated",
                result: profile
            })

        } catch (error) {
            errorHandler(res, error);
        }
    },
    getProfile: async (req,res) => {
        const { profileId: id } = req.params
        try {
            const profile = await Profile.findByPk(id);
            if (!profile) {
                return res.status(404).json({
                    status: "Data Not Found",
                    message: "There is no data with id " + id,
                    result: {}
                })
            }
            return res.status(200).json({
                status: "Success",
                message: "Data Found",
                result: profile
            })
        } catch (error) {
            errorHandler(res, error);
        }
    }
}