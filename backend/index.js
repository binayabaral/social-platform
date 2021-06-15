const express = require('express');
const dotenv = require('dotenv');
const { notFound, errorHandler } = require('./middlewares/errorMiddlewares');
const routes = require('./routes');
const cors = require('cors');

const app = express();
dotenv.config();

app.use(express.json());

app.use(cors());

app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on port ${PORT}`));
