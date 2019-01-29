import React, { Component, Fragment } from "react";
import format from "date-fns/format";

// Container
import container from "./container";

// Components
import { If, Card, Commit, Title } from "../../Components";

class CommitList extends Component {
  componentDidMount = () => {
    const {
      getListCommits,
      match: { params }
    } = this.props;
    this.scrollInfiniy();

    const query = {};

    if (params.username && params.repos) {
      query.username = params.username;
      query.repos = params.repos;
      getListCommits(query);
    }
  };

  scrollInfiniy = () => {
    const {
      isRequest,
      getListCommits,
      match: { params }
    } = this.props;

    const query = {};

    if (params.username && params.repos) {
      query.username = params.username;
      query.repos = params.repos;
      getListCommits(query);
    }

    if (!isRequest) {
      window.onscroll = e => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 25
        ) {
          getListCommits(query);
        }
      };
    }
  };

  render() {
    const { commitsList } = this.props;
    return (
      <Fragment>
        <Title> Commits </Title>
        <If condition={commitsList}>
          {commitsList.map(({ commit, author }, i) => {
            return (
              <Card key={i}>
                <Commit
                  username={commit.author.name}
                  message={commit.message}
                  date={format(commit.committer.date, "D/M/YYYY")}
                  img={author.avatar_url}
                />
              </Card>
            );
          })}
        </If>
      </Fragment>
    );
  }
}

export default container(CommitList);
