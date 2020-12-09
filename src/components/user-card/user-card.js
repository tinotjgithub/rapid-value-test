import { Fragment, Component } from "react";
import { UserInfoAction } from "../../actions/UserInfoActions";
import { connect } from "react-redux";
class UserCard extends Component {
  componentDidMount() {
    this.props.UserInfoAction(10);
  }

  getInitilats = (name) => {
    let initials = name.match(/\b\w/g) || [];
    initials = (
      (initials.shift() || "") + (initials.pop() || "")
    ).toUpperCase();
    return initials;
  };

  navigateToUserInfo = (userInfo) => {
    this.props.history.push({
      pathname: "/user-info",
      state: { userInfo: userInfo },
    });
  };

  render() {
    const { userInfo } = this.props;
    const userArray = [];
    userInfo.forEach((user, index) => {
      userArray.push(
        <div
          key={index}
          className="row d-flex justify-content-start m-3 text-center p-2"
          style={{ backgroundColor: "#63c363", cursor: "pointer" }}
          onClick={() => this.navigateToUserInfo(user)}
        >
          <div className="rounded-circle rounded-div">
            <label
              style={{
                margin: "auto",
                marginTop: "25%",
                fontSize: "30px",
              }}
            >
              {this.getInitilats(user.name)}
            </label>
          </div>
          <div className="mt-2 ml-2" style={{ width: "90%", height: "100px" }}>
            <div className="mr-auto text-dark">
              <div className="d-flex flex-row">
                <h2>{user.name}</h2>
              </div>
              <div className="d-flex flex-row">
                <h3>{user.email}</h3>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <Fragment>
        <h1  style={{ backgroundColor: "#e9ecef", cursor: "pointer" }} className = "m-3 p-3">Users</h1>
        {userArray}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.UserInfoReducer.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => ({
  UserInfoAction: (param) => dispatch(UserInfoAction(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
