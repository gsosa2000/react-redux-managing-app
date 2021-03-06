export const LOGIN_REQUEST = {
  SEND: "SEND_LOGIN_REQUEST",
  RECIVE: "RECEIVE_LOGIN_REQUEST",
  ERROR: "ERROR_LOGIN_REQUEST"
};
export const LOGOUT_USER = "LOGOUT_USER";

export function logOut() {
  return {
    type: LOGOUT_USER
  };
}

export function logIn(request) {
  return {
    type: LOGIN_REQUEST.SEND,
    request
  };
}

export function recieveLogInRequest(response) {
  return {
    type: LOGIN_REQUEST.RECIVE,
    response
  };
}

export function errorLogInRequest(error) {
  return {
    type: LOGIN_REQUEST.ERROR,
    error
  };
}

export const WORKERS_REQUEST = {
  SEND: "SEND_WORKERS_REQUEST",
  RECIVE: "RECEIVE_WORKERS_REQUEST",
  ERROR: "ERROR_WORKERS_REQUEST"
};

export function sendWorkersRequest() {
  return {
    type: WORKERS_REQUEST.SEND
  };
}

export function recieveWorkersRequest(response) {
  return {
    type: WORKERS_REQUEST.RECIVE,
    response
  };
}

export function errorWorkersRequest(error) {
  return {
    type: WORKERS_REQUEST.ERROR,
    error
  };
}

export const PROJECTS_REQUEST = {
  SEND: "SEND_PROJECTS_REQUEST",
  RECIVE: "RECEIVE_PROJECTS_REQUEST",
  ERROR: "ERROR_PROJECTS_REQUEST"
};

export function sendProjectsRequest() {
  return {
    type: PROJECTS_REQUEST.SEND
  };
}

export function receiveProjectsRequest(response) {
  return {
    type: PROJECTS_REQUEST.RECIVE,
    response
  };
}

export function errorProjectsRequest(error) {
  return {
    type: PROJECTS_REQUEST.ERROR,
    error
  };
}

export const NOTIFICATIONS_REQUEST = {
  SEND: "SEND_NOTIFICATIONS_REQUEST",
  RECEIVE: "RECEIVE_NOTIFICATIONS_REQUEST",
  ERROR: "ERROR_NOTIFICATIONS_REQUEST"
};

export function sendNotificationsRequest() {
  return {
    type: NOTIFICATIONS_REQUEST.SEND
  };
}

export function receiveNotificationsRequest(response) {
  return {
    type: NOTIFICATIONS_REQUEST.RECEIVE,
    response
  };
}

export function errorNotificationsRequest(error) {
  return {
    type: NOTIFICATIONS_REQUEST.ERROR,
    error
  };
}

export const WORKER_REQUEST = {
  SEND: "SEND_WORKER_REQUEST",
  RECEIVE: "RECEIVE_WORKER_REQUEST",
  ERROR: "ERROR_WORKER_REQUEST"
};

export function sendWorkerRequest(firstName, lastName) {
  return {
    type: WORKER_REQUEST.SEND,
    request: {
      firstName,
      lastName
    }
  };
}

export function recieveWorkerRequest(response) {
  return {
    type: WORKER_REQUEST.RECEIVE,
    response
  };
}

export function errorWorkerRequest(error) {
  return {
    type: WORKER_REQUEST.ERROR,
    error
  };
}

export const PROJECT_REQUEST = {
  SEND: "SEND_PROJECT_REQUEST",
  RECEIVE: "RECEIVE_PROJECT_REQUEST",
  ERROR: "ERROR_PROJECT_REQUEST"
};

export function sendProjectRequest(projectName) {
  return {
    type: PROJECT_REQUEST.SEND,
    request: projectName
  };
}

export function receiveProjectRequest(response) {
  return {
    type: PROJECT_REQUEST.RECEIVE,
    response
  };
}

export function errorProjectRequest(error) {
  return {
    type: PROJECT_REQUEST.ERROR,
    error
  };
}
