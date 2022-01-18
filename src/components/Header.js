function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-bottom shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BUG|Resolve</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">All Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add-student">Register User</a>
                        </li>
                        </ul>
                        <a href="#" className="btn btn-primary btn-sm m-1 disabled">Login</a>
                        <a href="#" className="btn btn-primary btn-sm m-1 disabled">Register</a>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
