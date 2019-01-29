import React, { Component, Fragment } from "react";
import differenceInDays from "date-fns/difference_in_days";
import { Link } from "react-router-dom";
import { RingLoader } from "react-spinners";

// Container
import container from "./container";

// Components
import {
  If,
  Card,
  Info,
  Avatar,
  Loading,
  BackPage,
  Repository
} from "../../Components/";

import layout from "../../config/layout";

class RepositoryList extends Component {
  componentDidMount() {
    this.getRepositoryList();
    this.scrollInfiniy();
  }

  getRepositoryList = () => {
    const {
      getRepository,
      match: { params }
    } = this.props;

    const query = {};

    if (params.username) {
      query.username = params.username;
      getRepository(query);
    }
  };

  differenceDates = lastCommit => {
    const { warning, danger, success } = layout.colors;

    const dateNow = new Date();
    const lastCommitDate = differenceInDays(dateNow, lastCommit);
    let result = {};

    if (lastCommitDate <= 30) {
      result.color = success;
      result.message = "Latest Updates";
    }
    if (lastCommitDate > 30 && lastCommitDate <= 60) {
      result.color = warning;
      result.message = "between 30 and 60 days";
    }

    if (lastCommitDate > 60) {
      result.color = danger;
      result.message = "No recent updates";
    }
    return result;
  };

  scrollInfiniy = () => {
    const { isRequest } = this.props;
    if (!isRequest) {
      window.onscroll = e => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 25
        ) {
          this.getRepositoryList();
        }
      };
    }
  };

  render() {
    const { repositories, user, getListCommits, loading } = this.props;
    return (
      <Fragment>
        <If condition={repositories && repositories.length}>
          <Avatar src={user.avatar_url} />
          <Card info>
            <Info
              value={user ? user.following : null}
              description={"following"}
            />
            <Info
              value={user ? user.public_repos : null}
              description={"repositories publics"}
            />
            <Info
              value={user ? user.followers : null}
              description={"followers"}
            />
          </Card>
          {repositories.map(({ name, updated_at, description }, i) => {
            return (
              <Card key={i} onClick={() => getListCommits(name)}>
                <Link
                  to={`/list-commits/${user.login}/${name}`}
                  style={{ textDecoration: "none" }}
                >
                  <Repository
                    name={name}
                    description={description}
                    commitStatus={this.differenceDates(updated_at)}
                  />
                </Link>
              </Card>
            );
          })}
        </If>
        <Loading>
          <RingLoader color={"#123abc"} loading={loading} />
        </Loading>
        <BackPage to={"/"} />
      </Fragment>
    );
  }
}

export default container(RepositoryList);
