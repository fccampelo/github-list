import { connect } from "react-redux";

const mapStateToProps = ({ profile }) => ({
  commitsList: profile.commitsList,
  isRequest: profile.isRequest
});

const mapDispatchToProps = ({ profile: { getListCommits } }) => ({
  getListCommits
});

export default component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
