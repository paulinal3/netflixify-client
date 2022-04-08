import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import { changePassword } from "../../api/auth"
import messages from "../shared/AutoDismissAlert/messages"

import { Form, Button, FloatingLabel } from "react-bootstrap"

const ChangePassword = (props) => {

    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    const navigate = useNavigate()

	const onChangePassword = (event) => {
		event.preventDefault()

		const { msgAlert, user } = props
        console.log("the user", user)
        
        const passwords = {oldPassword, newPassword}

		changePassword(passwords, user)
			.then(() =>
				msgAlert({
					heading: "Change Password Success",
					message: messages.changePasswordSuccess,
					variant: "success",
				})
			)
			.then(() => navigate("/profile"))
			.catch((error) => {
				setOldPassword("")
                setNewPassword("")
				msgAlert({
					heading: "Change Password Failed with error: " + error.message,
					message: messages.changePasswordFailure,
					variant: "danger",
				})
			})
	}

    return (
        <div id="change-password-container" className="page-container auth-page-container">
            <div id="changePwContainer" className="auth-form-container">
                <Form id="changepw-form" className="auth-form" onSubmit={onChangePassword}>
                    <Form.Group controlId="old-password">
                        <FloatingLabel
                            controlId="old-password"
                            label="Old Password"
                            className="auth-input"
                        >
                            <Form.Control
                                required
                                name="oldPassword"
                                value={oldPassword}
                                type="password"
                                placeholder="Old Password"
                                onChange={e => setOldPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId="new-password">
                        <FloatingLabel
                            controlId="new-password"
                            label="New Password"
                            className="auth-input"
                        >
                            <Form.Control
                                required
                                name="newPassword"
                                value={newPassword}
                                type="password"
                                placeholder="New Password"
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button id="changepw-btn" type="submit">
                        Change Password
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword