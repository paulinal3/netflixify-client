import SignInModal from "./signInModal/SignInModal";
import SignUpModal from "./signUpModal/SignUpModal";

import "./auth.css"

export default function Auth({ setUser, showLoginModal, showRegisterModal }) {

    return (
        <div className="modal-container">
            {
                showLoginModal ? <SignInModal setUser={setUser} /> : <SignUpModal setUSer={setUser} />
            }
        </div>
    )
}
