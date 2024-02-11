import React from "react";
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        login: "dummy",
        location: "Dto",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Vipulpandey");
    const json = await data.json();

    this.setState({
      userinfo: json,
    });
  }
  render() {
    return (
      <div className="user-card">
        <img src={this.state.userinfo.avatar_url} />
        <h2>Name:- {this.state.userinfo.login}</h2>
        <h3>Location:-Ranchi,Jharkhand</h3>
        <h3>Contact:- 8340311564</h3>
      </div>
    );
  }
}
export default User;
