const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-3">
                        <h1 className="fw-bold text-primary m-0">REACT</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <nav className="navigation">
                            <ul className="nav-list d-flex justify-content-center align-content-center gap-5">
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">Home</a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-list-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="header-right text-end">
                            <a className="btn btn-primary" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;