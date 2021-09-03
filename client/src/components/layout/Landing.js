import React, { Component } from "react";
import { Link } from "react-router-dom";
class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h4>
              <b>Bienvenue</b> sur cette petite appli de connexion !
            </h4>
            <p className="flow-text grey-text text-darken-1">
              L'authentification utilise un token JWT et repose sur une architecture MERN. J'étais aussi un peu rouillé avec Redux, du coup je l'ai ré-intégré :)
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Créer un compte
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
