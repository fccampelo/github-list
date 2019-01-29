import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

// Containers
import container from "./container";

// Components
import {
  If,
  Card,
  Input,
  UserList,
  Title,
  Loading,
  NotFoundComponent
} from "../../Components";

class Search extends Component {
  render() {
    const { name, avatar_url, bio, location, id, login } = this.props.profile;
    const { getRepository, getUserProfile } = this.props;
    return (
      <Fragment>
        <Title>search by username</Title>
        <Card>
          <Input
            placeholder="search for a username"
            onBlur={e => getUserProfile(e.target.value)} //        onBlur={e => this.getProfileGitHub(e)}
          />
        </Card>
        <If condition={this.props.profile && !this.props.errorRequest}>
          <Card onClick={() => getRepository()}>
            <Link style={{ textDecoration: "none" }} to={`/${login}`}>
              <UserList
                img={avatar_url}
                name={name}
                bio={bio}
                location={location}
                id={id}
              />
            </Link>
          </Card>
        </If>
        <If condition={this.props.errorRequest}>
          <NotFoundComponent />
        </If>
        <Loading>
          <RingLoader color={"#123abc"} loading={this.props.loading} />
        </Loading>
      </Fragment>
    );
  }
}

export default container(Search);
