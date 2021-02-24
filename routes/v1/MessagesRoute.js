import express from 'express';
import MessageController  from '../../controllers/v1/MessageController';

const  routes = express.Router();
const {receiveMessageFromPublisher} = new MessageController();

routes.post('/', receiveMessageFromPublisher);

export default routes;
