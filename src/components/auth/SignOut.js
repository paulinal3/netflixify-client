import { useNavigate } from "react-router-dom"

import { Button, ButtonGroup } from "react-bootstrap"

import { signOut } from "../../api/auth"
import messages from "../shared/AutoDismissAlert/messages"

const SignOut = (props) => {
    const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
        signOut(user)
            .finally(() =>
                msgAlert({
                    heading: "Signed Out Successfully",
                    message: messages.signOutSuccess,
                    variant: "success",
                })
            )
            .finally(() => navigate("/"))
            .finally(() => clearUser())
    }

    const onCancel = () => {
        navigate("/profile")
    }

    return (
        // <>
            <div id="signOut signout-page-container" className="page-container auth-page-container">
                <div className="auth-form-container" id="signout-container">
                    <h2>Are you sure you want to sign out?</h2>
                    <p>We hate to see you go...</p><br />
                    <ButtonGroup className="signout-btns">
                        <Button id="signout-btn" variant="danger" onClick={onSignOut}>
                            Sign Out
                        </Button>
                        <Button id="cancel-btn" variant="success" onClick={onCancel}>
                            Cancel
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        // </>
    )
}

export default SignOut
