
import autoBind from 'auto-bind';
import { response } from 'express';
import BaseController from './BaseController';


class MessageController extends BaseController{
    constructor(){
        super();
        autoBind(this);
    }
    /**
   * @param {Object} req 
   * @param {Object} res 
   * @api {post} /api/v1/messages Listen to new messages from Publisher
   * @apiName Messages from Publisher
   * @apiGroup Messages  
   */
    async receiveMessageFromPublisher (req, res){
        try{
            const {topic, data} = req.body;

            // do anything with the data receive
            console.log(req.body);

            // Acknowledge 
            return super.actionSuccess(res, 'Message Received');
        
        }catch(error){
            const message =  error.message || 'Something went wrong';

            return super.actionFailure(res, message);
        }

    }

}

export default MessageController;