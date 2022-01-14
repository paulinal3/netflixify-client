import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import { Form, Button, FloatingLabel } from 'react-bootstrap'

const ChangePassword = (props) => {

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')

    const navigate = useNavigate()

	const onChangePassword = (event) => {
		event.preventDefault()

		const { msgAlert, user } = props
        console.log('the user', user)
        

        const passwords = {oldPassword, newPassword}

		changePassword(passwords, user)
			.then(() =>
				msgAlert({
					heading: 'Change Password Success',
					message: messages.changePasswordSuccess,
					variant: 'success',
				})
			)
			.then(() => navigate('/'))
			.catch((error) => {
				setOldPassword('')
                setNewPassword('')
				msgAlert({
					heading: 'Change Password Failed with error: ' + error.message,
					message: messages.changePasswordFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <div className='row'>
            <div id='changePwForm' className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Change Password</h3>
                <Form id='changePwForm' onSubmit={onChangePassword}>
                    <Form.Group controlId='oldPassword'>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='Old Password'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                name='oldPassword'
                                value={oldPassword}
                                type='password'
                                placeholder='Old Password'
                                onChange={e => setOldPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group controlId='newPassword'>
                        <FloatingLabel
                            controlId='floatingInput'
                            label='New Password'
                            className='mb-3'
                        >
                            <Form.Control
                                required
                                name='newPassword'
                                value={newPassword}
                                type='password'
                                placeholder='New Password'
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>
                    <Button variant='success' id='changePwBtn' type='submit'>
                        Change Password
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ChangePassword