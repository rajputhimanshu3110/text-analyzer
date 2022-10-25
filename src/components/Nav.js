
function Nav(props) {
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
        <a className="navbar-brand">{props.branding}</a>
        
        </div>
    </nav>
    );
}
Nav.defaultProps = {
    branding : 'Project Name'
}
export default Nav;
