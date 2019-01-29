import { connect } from "react-redux";

const mapStateToProps = ({ profile }) => {
  console.log(profile);
  return {
    profile: profile.user,
    errorRequest: profile.wrong,
    loading: profile.loading
  };
};

const mapDispatchToProps = ({
  profile: { getUserProfile, getRepository }
}) => ({
  getUserProfile,
  getRepository
});

export default component =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(component);
