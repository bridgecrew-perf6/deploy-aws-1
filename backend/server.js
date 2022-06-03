const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
	origin: '*',
}));

app.get('/', (req, res) => {
	res.send('Welcome on my API !');
});

app.get('/get-message', (req, res) => {
	res.json({
		message: 'Hello World from Express !',
	});
});

app.listen(3030, () => {
	console.log('Server started on port 3030');
});