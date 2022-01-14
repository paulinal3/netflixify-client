import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, FloatingLabel, Button } from 'react-bootstrap'

const SignIn = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const onSignIn = (event) => {
        event.preventDefault()
        console.log('the props', props)
        const { msgAlert, setUser } = props

        const credentials = { email, password }

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: 'Sign In Success',
                    message: messages.signInSuccess,
                    variant: 'success',
                })
            )
            .then(() => navigate('/profile'))
            .catch((error) => {
                setEmail('')
                setPassword('')
                msgAlert({
                    heading: 'Sign In Failed with error: ' + error.message,
                    message: messages.signInFailure,
                    variant: 'danger',
                })
            })
    }

    return (
        <div className='row' id='signIn'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign In</h3>
                <Form onSubmit={onSignIn}>
                    <>
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
                                placeholder='Email'
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
                    </>
                    <Button variant='success' id='signInBtn' type='submit'>
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignIn
