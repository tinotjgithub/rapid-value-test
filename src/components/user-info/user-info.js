import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: props.location.state.userInfo,
    };
  }
  render() {
    const { userInfo } = this.state;
    if (userInfo) {
      return (
        <Fragment>
          <div class="back-button float-left">
            <Link to="/user-list">{"<<"} Back</Link>
          </div>
          <div className="d-flex justify-content-start">
            <div>
              <div>
                <h2>User Info</h2>
              </div>
              <div>
                <label
                  className="mr-2"
                  style={{ minWidth: "150px", textAlign: "right" }}
                >
                  Address:
                </label>
                <input
                  value={
                    userInfo.name +
                    ", " +
                    userInfo.address.city +
                    ", " +
                    userInfo.address.street +
                    ", " +
                    userInfo.address.suite +
                    ", " +
                    userInfo.address.zipcode
                  }
                  readOnly
                  disabled
                  style={{
                    height: "75px",
                    minWidth: "500px",
                    marginBottom: "5px",
                  }}
                ></input>
              </div>
              <div>
                <label
                  className="mr-2"
                  style={{ minWidth: "150px", textAlign: "right" }}
                >
                  Phone:
                </label>
                <input
                  value={userInfo.phone}
                  readOnly
                  disabled
                  style={{ minWidth: "500px", marginBottom: "5px" }}
                ></input>
              </div>
              <div>
                <label
                  className="mr-2"
                  style={{ minWidth: "150px", textAlign: "right" }}
                >
                  Website:
                </label>
                <input
                  value={userInfo.website}
                  readOnly
                  disabled
                  style={{ minWidth: "500px", marginBottom: "5px" }}
                ></input>
              </div>
              <div>
                <label
                  className="mr-2"
                  style={{ minWidth: "150px", textAlign: "right" }}
                >
                  Company Name:
                </label>
                <input
                  value={userInfo.company.name}
                  readOnly
                  disabled
                  style={{ minWidth: "500px", marginBottom: "5px" }}
                ></input>
              </div>
            </div>
          </div>
        </Fragment>
      );
    }
  }
}
