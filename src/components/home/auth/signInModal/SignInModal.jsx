import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { signIn } from "../../../../api/auth"
import messages from "../../../shared/AutoDismissAlert/messages"

import { Form, FloatingLabel, Button } from "react-bootstrap"

const SignInModal = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const onSignIn = (event) => {
        event.preventDefault()
        console.log("the props", props)
        const { msgAlert, setUser } = props

        const credentials = { email, password }

        signIn(credentials)
            .then((res) => setUser(res.data.user))
            .then(() =>
                msgAlert({
                    heading: "Sign In Success",
                    message: messages.signInSuccess,
                    variant: "success",
                })
            )
            .then(() => navigate("/profile"))
            .catch((error) => {
                setEmail("")
                setPassword("")
                msgAlert({
                    heading: "Sign In Failed with error: " + error.message,
                    message: messages.signInFailure,
                    variant: "danger",
                })
            })
    }

    return (
        <div className="page-container auth-page-container" id="signin-page-container">
            <div className="auth-form-container" id="signin-container">
                <Form className="auth-form" id="signin-form" onSubmit={onSignIn}>
                    <>
                        {/* <----- EMAIL -----> */}
                        <FloatingLabel
                            controlId="signin-email"
                            label="Email address"
                            className="auth-input"
                        >
                            <Form.Control
                                required
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FloatingLabel>
                        {/* <----- PASSWORD -----> */}
                        <FloatingLabel
                            controlId="signin-password"
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
                    </>
                    <Button id="signin-btn" type="submit">
                        Sign In
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default SignInModal
