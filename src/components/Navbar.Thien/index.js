import React from "react";
import { Link} from "react-router-dom";
import "./style.css"

class Navbar extends React.Component {
  state = {
    isTop: true,
    shouldRedirectToChat: false
  };
  redirectToChat = this.redirectToChat.bind(this)


  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 30;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop })
      }
    });
  }
  redirectToChat() {
    this.setState({
      shouldRedirectToChat: true
    })
  }

  render() {

    let navbar = "navbar navbar-expand-lg fixed-top py-0";
    if (this.state.isTop) {
      navbar += " navbar-dark bg-transparent"
    } else {
      navbar += " navbar-light bg-white"
    }

    if (this.props.isLoggedIn === false) {
      return (
        <nav className={navbar} >
          <Link className="navbar-brand" to="/">
            Makin' Moves
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" >
                <Link to="/register"
                  className={window.location.pathname === "/register" ? "nav-link active" : "nav-link"}>
                  <i className="fas fa-user-plus"></i> Register
                </Link>
              </li>
              <li className="nav-item" >
                <a className="nav-link" data-toggle="modal" data-target="#loginModal" href="#">
                  <i className="fas fa-sign-in-alt"></i> Log In</a>
              </li>
            </ul>
          </div>
        </nav>
      );

    } else {
      if (this.state.shouldRedirectToChat) {
        return <redirect to="/chat"></redirect>
      } else {
        return (
          <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-white py-0">
            <Link className="navbar-brand text-body" to="/profile">
              Makin' Moves
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse float-right" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item m-2">
                  <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}><i className="home-link"></i> Home</Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/planatrip" className={window.location.pathname === "/planatrip" ? "nav-link active" : "nav-link"}><i className="Plan-a-trip-link"></i> Plan A trip </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/mytrip" className={window.location.pathname === "/mytrip" ? "nav-link active" : "nav-link"} target="_"><i className="my-trip-link"></i> My Trip </Link>
                </li>
                <li className="nav-item m-2">
                  <Link to="/" className="nav-link" onClick={this.props.logOut}><i className="fas fa-sign-out-alt"></i> Log Out</Link>
                </li>
              </ul>
            </div>
          </nav>
      )
        }
    }
  }
}

export default Navbar;