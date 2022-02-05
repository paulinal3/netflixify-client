import React from 'react'

export default function Footer() {
    return (
        <div>
            {/* <footer class="fixed-bottom"> */}
            <footer id='footer'>
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Tech Stack</h5>
                            <p>
                                React
                            </p>
                        </div>

                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Contact</h5>
                            <p>
                                
                            </p>
                        </div>
                    </div>
                </div>

                <div class="text-center p-3" styles="background-color: rgba(0, 0, 0, 0.2);">
                    © 2022 Copyright: Paulina Le
                </div>
            </footer>
        </div>
    )
}
