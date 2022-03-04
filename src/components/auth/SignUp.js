import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signUp, signIn } from "../../api/auth"
import messages from "../shared/AutoDismissAlert/messages"

import { Form, FloatingLabel, Button } from "react-bootstrap"

const SignUp = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")

    const navigate = useNavigate()

    const onSignUp = (event) => {
        event.preventDefault()

        const { msgAlert, setUser } = props

        const credentials = { firstName, lastName, email, password, passwordConfirmation }

        signUp(credentials)
            .then(() => signIn(credentials))
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: "Sign Up Success",
                    message: messages.signUpSuccess,
                    variant: "success",
                })
            )
            .then(() => navigate("/"))
            .catch((error) => {
                setFirstName("")
                setLastName("")
                setEmail("")
                setPassword("")
                setPasswordConfirmation("")
                msgAlert({
                    heading: "Sign Up Failed with error: " + error.message,
                    message: messages.signUpFailure,
                    variant: "danger",
                })
            })
    }

    return (
        <div id="signup-page-container" className="page-container auth-page-container">
            <div id="signup-container" className="auth-form-container">
                <Form id="signup-form" className="auth-form" onSubmit={onSignUp}>
                    <div id="name-container">
                        {/* <----- FIRST NAME -----> */}
                        <FloatingLabel
                            controlId="first-name"
                            label="First name"
                            className="auth-input"
                        >
                            <Form.Control
                                required
                                type="firstName"
                                name="firstName"
                                value={firstName}
                                placeholder="First name"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- LAST NAME -----> */}
                        <FloatingLabel
                            controlId="last-name"
                            label="Last name"
                            className="auth-input"
                        >
                            <Form.Control
                                required
                                type="lastName"
                                name="lastName"
                                value={lastName}
                                placeholder="Enter last name"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </FloatingLabel>
                    </div>
                    {/* <----- EMAIL -----> */}
                    <FloatingLabel
                        controlId="email"
                        label="Email address"
                        className="auth-input"
                    >
                        <Form.Control
                            required
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    {/* <----- PASSWORD -----> */}
                    <FloatingLabel
                        controlId="password"
                        label="Password"
                        className="auth-input"
                    >
                        <Form.Control
                            required
                            name="password"
                            value={password}
                            type="password"
                            placeholder="Password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    {/* <----- PASSWORD CONFIRMATION -----> */}
                    <FloatingLabel
                        controlId="password-confirmation"
                        label="Confirm password"
                        className="auth-input"
                    >
                        <Form.Control
                            required
                            name="passwordConfirmation"
                            value={passwordConfirmation}
                            type="password"
                            placeholder="Confirm Password"
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </FloatingLabel>
                    <Button className="auth-btn" id="signup-btn" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </div>
        </div>
    )

}

export default SignUp