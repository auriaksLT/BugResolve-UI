function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light fixed-top bg-light border-bottom shadow-sm">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">ReactApi app</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/">All Students</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/add-student">Add Student</a>
                        </li>
                        </ul>
                        <a href="#" class="btn btn-primary btn-sm m-1">Login</a>
                        <a href="#" class="btn btn-primary btn-sm m-1">Register</a>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header