// import React from 'react'
import Link from 'next/link';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link href="/"><a className="navbar-brand" >Franklin's Portafolio</a></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link href="/" >
                                <a className="nav-link" >Home </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/github">
                                    <a className="nav-link">GitHub</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>

    )
}
