import { init } from "@rematch/core";
import * as models from "../models";

import { createLogicMiddleware } from "redux-logic";
import rematchLogicPlugin from "rematch-logic";

const logicMiddleware = createLogicMiddleware([], {});

const store = init({
  models,
  plugins: [rematchLogicPlugin(logicMiddleware)],
  redux: {
    middlewares: [logicMiddleware]
  }
});

window.store = store;

export default store;
