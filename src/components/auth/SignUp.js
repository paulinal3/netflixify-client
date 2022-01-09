// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, FloatingLabel, Button } from 'react-bootstrap'

const SignUp = (props) => {
 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')

    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation}

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>
                        {/* <----- FIRST NAME -----> */}
                        <FloatingLabel
                            controlId='floatingInput'
                            label='First name'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                type='firstName'
                                name='firstName'
                                value={firstName}
                                placeholder='First name'
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- LAST NAME -----> */}
                        <FloatingLabel
                            controlId='floatingInput'
                            label='Last name'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                type='lastName'
                                name='lastName'
                                value={lastName}
                                placeholder='Enter last name'
                                onChange={e => setLastName(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- EMAIL -----> */}
                        <FloatingLabel
                            controlId='floatingInput'
                            label='Email address'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                type='email'
                                name='email'
                                value={email}
                                placeholder='Enter email'
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- PASSWORD -----> */}
                        <FloatingLabel
                            controlId='floatingPassword'
                            label='Password'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                name='password'
                                value={password}
                                type='password'
                                placeholder='Password'
                                onChange={e => setPassword(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- PASSWORD CONFIRMATION -----> */}
                        <FloatingLabel
                            controlId='floatingPassword'
                            label='Confirm password'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                name='passwordConfirmation'
                                value={passwordConfirmation}
                                type='password'
                                placeholder='Confirm Password'
                                onChange={e => setPasswordConfirmation(e.target.value)}
                            />
                        </FloatingLabel>
                        <Button id='signUpBtn' variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </Form>
            </div>
        </div>
    )

}

export default SignUp