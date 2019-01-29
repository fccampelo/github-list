import { connect } from "react-redux";

const mapStateToProps = ({ profile }) => ({
  repositories: profile.repository,
  user: profile.user,
  page: profile.pageRepository,
  isRequest: profile.isRequest,
  loading: profile.loading
});

const mapDispatchToProps = ({
  profile: { getUserProfile, getRepository, getListCommits }
}) => ({
  getUserProfile,
  getRepository,
  getListCommits
});

export default component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
