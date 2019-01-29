import axios from "axios";
import Immutable from "seamless-immutable";
import Api from "../config/api";

const { baseUrl, clientId, clientSecret } = Api;

const initialState = new Immutable({
  user: false,
  repository: [],
  commitsList: [],
  wrong: false,
  loading: false,
  pageRepository: 1,
  pageCommites: 1,
  login: "",
  isRequest: false
});

// profile model
export const profile = {
  state: initialState,
  reducers: {
    addUser(state, payload) {
      return state.merge({
        user: payload
      });
    },
    toggleRequestStatus(state, payload) {
      return state.merge({
        isRequest: !state.isRequest
      });
    },
    addByRepository(state, { data }) {
      return state.merge({
        repository: state.repository.concat(data)
      });
    },
    addByCommitsList(state, payload) {
      return state.merge({
        commitsList: state.commitsList.concat(payload)
      });
    },
    errorRequest(state, payload) {
      return state.merge({
        wrong: payload
      });
    },
    setloading(state, payload) {
      return state.merge({
        loading: payload
      });
    },
    changePageRepository(state, payload) {
      return state.merge({
        pageRepository: state.pageRepository + 1
      });
    },
    changePageCommites(state, payload) {
      return state.merge({
        pageCommites: state.pageCommites + 1
      });
    },
    saveLogin(state, payload) {
      return state.merge({
        login: payload
      });
    },
    toogleRequest(state, payload) {
      return state.merge({
        isRequest: !state.isRequest
      });
    }
  },
  logics: [
    {
      type: ["profile/addUser"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        dispatch.profile.errorRequest(false);
        dispatch.profile.setloading(false);
        done();
      }
    },
    {
      type: ["profile/errorRequest"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        dispatch.profile.setloading(false);
        done();
      }
    },
    {
      type: ["profile/getRepository"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        const state = getState();
        const { isRequest } = state.profile;
        const { username } = action.payload;

        if (isRequest) {
          dispatch.profile.changePageRepository();
        }
        dispatch.profile.saveLogin(username);
        done();
      }
    },
    {
      type: ["profile/addByRepository"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        const state = getState();
        const { user, login } = state.profile;

        if (!user) dispatch.profile.getUserProfile(login);
        dispatch.profile.toggleRequestStatus();
        dispatch.profile.setloading(false);
        done();
      }
    },
    {
      type: ["profile/addByCommitsList"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        const state = getState();
        const { isRequest } = state.profile;

        if (!isRequest) {
          dispatch.profile.changePageCommites();
        }
        dispatch.profile.toggleRequestStatus();

        done();
      }
    },
    {
      type: ["profile/getListCommits"],
      latest: true,
      process({ getState, action }, dispatch, done) {
        dispatch.profile.toggleRequestStatus();
        done();
      }
    }
  ],
  effects: dispatch => ({
    async getUserProfile(payload, state) {
      if (!payload) {
        return null;
      }
      try {
        dispatch.profile.setloading(true);
        const result = await axios.get(
          `${baseUrl}/users/${payload}?client_id=${clientId}&client_secret=${clientSecret}`
        );
        dispatch.profile.addUser(result.data);
      } catch (error) {
        dispatch.profile.errorRequest(true);
      }
    },
    async getRepository(payload, state) {
      if (payload) {
        const { username } = payload;
        const { pageRepository } = state.profile;
        try {
          dispatch.profile.setloading(true);
          const result = await axios.get(
            `${baseUrl}/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}&visibility=public&affiliation=owner&sort=pushed&direction=desc&per_page=10&page=${pageRepository}`
          );

          const repositoryPayload = {
            data: result.data,
            username
          };

          dispatch.profile.addByRepository(repositoryPayload);
        } catch (error) {
          dispatch.profile.errorRequest(true);
        }
      }
    },
    async getListCommits(payload, state) {
      const { pageCommites } = state.profile;
      if (payload) {
        const { username, repos } = payload;
        try {
          const result = await axios.get(
            `${baseUrl}/repos/${username}/${repos}/commits?client_id=${clientId}&client_secret=${clientSecret}&visibility=public&affiliation=owner&sort=pushed&direction=desc&per_page=10&page=${pageCommites}`
          );
          dispatch.profile.addByCommitsList(result.data);
        } catch (error) {
          dispatch.profile.errorRequest(false);
        }
      }
    }
  })
};
