import React, { useState } from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg  from '../../assets/logo.svg';

export default function Register() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');

	const history = useHistory();

	async function handleRegister(e) {
		e.preventDefault();

		const data = {
			name,
			email,
			whatsapp,
			city,
			state
		};

		try	{
			const response = await api.post('ongs',data)
			alert(`Your Access ID: ${response.data.id}`);	
			history.push('/');
		} catch (err) {
			alert('Error, try again.');
		}
	}

	return (
		<div className="register-container">
			<div className="content">
				<section>
					<img src={logoImg} alt="Be The Hero"/>
					<h1>Sign In</h1>
					<p>Register, help people to find the initiatives in your ONG.</p>
					
					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#E02041" />
						Sign In
					</Link>
				</section>
				<form onSubmit={handleRegister}>
					<input 
						placeholder="Name of ONG"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<input 
						type="email" 
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input 
						placeholder="Whatsapp"
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
					/>

					<div className="input-group">
						<input 
							placeholder="City"
							value={city}
							onChange={e => setCity(e.target.value)}
						/>
						<input 
							placeholder="State" 
							style={{ width: 100 }}
							value={state}
							onChange={e => setState(e.target.value)}
						/>
					</div>

					<button className="button" type="submit">Sign In</button>
				</form>
			</div>
		</div>
	);
}