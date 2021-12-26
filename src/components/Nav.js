
function Nav(props) {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
        <a className="navbar-brand">{props.branding}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href='/'>Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href='/about'>About</a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}
Nav.defaultProps = {
    branding : 'Project Name'
}
export default Nav;