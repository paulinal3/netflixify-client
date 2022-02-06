import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { FaLaptopCode } from 'react-icons/fa'

export default function Footer() {
    return (
        <footer class="text-center" id='footer'>
            <div class="container p-4 pb-0">
                {/* <!-- Section: Social media --> */}
                <section class="mb-4">
                    {/* <!-- Email --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="paulinal3@outlook.com" target='_blank' rel='noopener noreferrer' role="button"
                    ><HiOutlineMail /></a>

                    {/* <!-- Portfolio --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://paulinale.herokuapp.com/" target='_blank' rel='noopener noreferrer' role="button"
                    ><FaLaptopCode /></a>

                    {/* <!-- Linkedin --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/paulinal3/" target='_blank' rel='noopener noreferrer' role="button"
                    ><BsLinkedin /></a>

                    {/* <!-- Github --> */}
                    <a class="btn btn-outline-light btn-floating m-1" href="https://github.com/paulinal3" target='_blank' rel='noopener noreferrer' role="button"
                    ><BsGithub /></a>
                </section>
                {/* <!-- Section: Social media --> */}
            </div>

            <div class="text-center p-3">
                2022 Copyright: Paulina Le
            </div>
        </footer>
    )
}
