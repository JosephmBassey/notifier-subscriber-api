
import { config } from 'dotenv';
config();

const secrets = {
    port: process.env.PORT,
};

export default secrets;