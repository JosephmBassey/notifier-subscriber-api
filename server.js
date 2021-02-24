const app = require('./app');

//Running the server on Port 3000 default
let PORT = process.env.PORT || 8081;
app.listen(PORT, () => {console.log(`Notifier Subscriber Server running on Port ${PORT}`);});
