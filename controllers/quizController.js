const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const shortid = require('shortid');
const time = require('./../libs/timeLib');
const check = require('../libs/checkLib');

const UserModel = mongoose.model('User')


let createNewQuizFunction = (req,res) => {

    let newQuiz = new UserModel({
        userId: shortid.generate(),
        firstName: req.body.firstName,
        quest1: req.body.quest1,
        quest2: req.body.quest2,
        createdOn: time.now()
    })

    newQuiz.save((err, data) => {
        if (err) {
            logger.error(err.message, "quizController: createNewQuizFunction()->save", 5)
            let apiResponse = response.generate(true, "Failed to save new quiz", 500, null)
            res.send(apiResponse)
        }
        else {
            let newQuizObj = data.toObject()
            let apiResponse = response.generate(false, "Saved new quiz", 200, newQuizObj)
            res.send(apiResponse)
        }
    })
}


// --------------- get all registered users of the app --------------------
let getAllQuizFunction = (req, res) => {
    UserModel.find({})
        .select('-_id -__v')
        .exec((err, result) => {
            if (err) {
                logger.error(err.message, 'quiz Controller: getAllQuizFunction', 10)
                let apiResponse = response.generate(true, 'Internal Error occured', 500, null);
                res.send(apiResponse);
            }
            else if (check.isEmpty(result)) {
                logger.info('No Quizzes found!', 'quiz Controller: getAllQuizFunction');
                let apiResponse = response.generate(true, 'No quiz found!', 400, null);
                res.send(apiResponse);
            }
            else {

                logger.info('Quizzes found successfully', 'quiz Controller: getAllQuizFunction', 1);
                let apiResponse = response.generate(false, 'Quizzes found successfully', 200, result);
                res.send(apiResponse);
            }
        })
}


module.exports = {
    createNewQuiz: createNewQuizFunction,
    getAllQuiz: getAllQuizFunction
}