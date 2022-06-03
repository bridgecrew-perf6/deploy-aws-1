import { useEffect, useState } from 'react';

const App = () => {
	const [ message, setMessage ] = useState(null);

	useEffect(() => {
		setTimeout(async () => {
			const req = await fetch(`${process.env.REACT_APP_API_URL}/get-message`, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				}
			});

			if (req.ok) {
				const res = await req.json();
				setMessage(res.message);
			}
			else {
				setMessage('Erreur: impossible de contacter l\'API.');
			}
		}, 2000);
	}, []);

	return (
		<>
			<h1>Hello World !</h1>
			<p>{message === null ? 'En attente du serveur...' : message}</p>
		</>
	);
};

export default App;