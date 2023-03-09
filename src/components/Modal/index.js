import React from "react";
import LoginForm from "../LoginForm";

function Modal(props) {
  return (
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title mx-auto text-center" id="loginLabel"><i className="fas fa-luggage-cart"></i> Welcome</h4>
              {/* <button type="button" className="close ml-0 p-2" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button> */}
            </div>
            <div className="modal-body m-2">
              <LoginForm login={props.login}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Modal;