import SignInModal from "./signInModal/SignInModal";
import SignUpModal from "./signUpModal/SignUpModal";

export default function Auth({ setUser, showLoginModal, showRegisterModal }) {

    return (
        <div>
            {
                showLoginModal ? <SignInModal setUser={setUser} /> : <SignUpModal setUSer={setUser} />
            }
        </div>
    )
}
