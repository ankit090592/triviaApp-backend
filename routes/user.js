const express = require('express');
const router = express.Router();
const quizController = require("../controllers/quizController");
const appConfig = require("../config/appConfig");

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

    app.post(`${baseUrl}/saveQuiz`, quizController.createNewQuiz);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/saveQuiz New Quiz Creation.
     *     
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} quest1 First question to the user. (body params)
     * @apiParam {string} quest2 Second question to the user. (body params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Quiz saved",
            "status": 200,
            "data": {               
                "userId":string,
                "quest1": string,
                "quest2": string,
                "createdOn":date
            }

        }

        @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to save quiz",
	    "status": 500,
	    "data": null
	   }
    */


    app.get(`${baseUrl}/getAllQuizzes`, quizController.getAllQuiz);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/saveQuiz New Quiz Creation.
     *     
     * @apiParam {string} firstName firstName of the user. (body params) (required)
     * @apiParam {string} quest1 First question to the user. (body params)
     * @apiParam {string} quest2 Second question to the user. (body params) (required)
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Quiz saved",
            "status": 200,
            "data": {               
                "userId":string,
                "quest1": string,
                "quest2": string,
                "createdOn":date
            }

        }

        @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed to save quiz",
	    "status": 500,
	    "data": null
	   }
    */
   
    }