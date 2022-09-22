import styled from 'styled-components';
import { useState, forwardRef } from 'react';
import isEmail from 'validator/lib/isEmail';
import LoadingAnimation from './Loading-animation';


const StyledContact = styled.div`
	height:100vh;
	display:flex;
	justify-content: center;
	align-items: center;
	background-color: grey;
	background-size:100% 100%;
	color:white;
	font-size: 1.2rem;

	@media (min-width:800px){
		font-size:1.3rem;
	}

	@media (min-width:1200px){
			font-size:1.8rem;
	}



	form{
		width:80%;
		background-color: black;
		opacity: 0.8;
		padding:3em;
		border-radius: 15px;
		color:white;

		@media (min-width:500px){
			width:65%;
		}

		@media (min-width:800px){
			width:55%;
		}

		@media (min-width:1100px){
			width:45%;
		}


		@media (min-width:1400px){
			width:35%;
		}


		h1{
			text-align: center;
			margin-bottom:1em;
			font-size: 2.5em;
		}


		button{
			display:block;
			padding:0.4em;
			margin:0.6em auto;
			font-size:1.4em;
			border:1px solid white;
			border-radius: 0.2em;
			background-color: transparent;
			color:inherit;

			&:hover{
				cursor: pointer;
				background-color: white;
				color:black;

			}
		}

		h2.success-msg{
			text-align: center;

		} 

	}

`;

const StyledInput = styled.input`

	display:block;
	font-size: 1.5em;
	width:100%;
	margin-bottom:10px;
	color:inherit;
	background-color: transparent;
	border:none;
	border-bottom-width:1px;
	border-bottom-style:solid;
	border-color:${({ error }) => error ? "red" : "white" };

	&:focus{
		outline:none;
	}

`;

const StyledTextarea = styled.textarea`

	resize: none;
	width:100%;
	height:30vh;
	margin-bottom:10px;
	font-size: 1.5em;
	color:inherit;
	background-color: transparent;
	border-width:1px;
	border-style:solid;
	border-color:${({ error }) => error ? "red" : "white" };
	font-family: inherit;

	&:focus{
		outline:none;
	}

`;

const ErrorLabel = styled.label`

	display: block;
	margin-bottom:0.5em;
	color: red;
	visibility: ${({ error }) => error ? "visible" : "hidden"};

`;


const Contact = forwardRef(({ baseURL }, ref) => {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [nameError, setNameError] = useState(false);
	const [emailError, setEmailError] = useState(false);
	const [messageError, setMessageError] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [sendingStatus, setSendingStatus] = useState("idle");

	const alterDomBasedOnSendingStatus = () => {

		switch(sendingStatus){
			case "idle":
				return <button type="submit">Submit </button>;
			case "pending":
				return <LoadingAnimation/>
			case "fulfilled":
				return <h2 className="success-msg" >Message sent.</h2>;
		}
	};


	const handleChange = (e) => {

		if(e.target.name === "name"){
			setName(e.target.value);
			if(submitted)!e.target.value ? setNameError(true) : setNameError(false);

		}
		else if(e.target.name === "email"){
			setEmail(e.target.value);
			if(submitted)!isEmail(e.target.value) ? setEmailError(true) : setEmailError(false);

		}else{
			setMessage(e.target.value);
			if(submitted)!e.target.value ? setMessageError(true) : setMessageError(false);
		}
	}


	const submitForm = async(e) =>{

		e.preventDefault();
		if(!submitted){
			!name && setNameError(true);
			!isEmail(email) && setEmailError(true);
			!message && setMessageError(true);
		}
		!submitted && setSubmitted(true);

		if(!name || !isEmail(email) || !message) return;

		try{
			setSendingStatus("pending");
			const response = await fetch(`${baseURL}messages/add`, {
				method: 'POST',
				headers: {
				  'Content-Type': 'application/json'
	
				},
				body: JSON.stringify({
					name,
					email,
					content: message
				}),
			})
			if(!response.ok) throw {status:response.status};
			setSendingStatus("fulfilled");
			setTimeout(() => setSendingStatus("idle"), 2000);
			setName("");
			setEmail("");
			setMessage("");
			setSubmitted(false);

		}catch(error){
			if(error.status === 500) return console.error("internal server error");
			console.error(error);

		}
	
	
	}

  return (

	<StyledContact  className="background-image" id="contact" ref={ref}>
		<form onSubmit={submitForm}>
			<h1>Get in touch!</h1>

			<StyledInput placeholder='Name' name="name" value={name} onChange={handleChange} error={nameError} />
			<ErrorLabel error={nameError}>Please fill this out</ErrorLabel>

			<StyledInput placeholder='Email' name="email"  value={email} onChange={handleChange} error={emailError} />
			<ErrorLabel error={emailError} >Invalid email address</ErrorLabel>

			<StyledTextarea placeholder="Message details" name="message" value={message} onChange={handleChange} error={messageError}  />
			<ErrorLabel error={messageError} >Please fill this out</ErrorLabel>

			{alterDomBasedOnSendingStatus()}
		</form>
    </StyledContact>

  );
})


export default Contact;