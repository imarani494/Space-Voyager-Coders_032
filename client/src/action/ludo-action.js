import * as actions from "../actiontypes/ludo-actiontypes";

export const joinNewTable = socket => {
  return dispatch => {
    let postData = socketMessageFactory(actions.SEND_JOIN, {});
    emitSocketMessage(socket, actions.MESSAGE, postData);
    dispatch(onPlayerAction(action.ON_JOIN));
  };
};

export const roll_dice = socket => {
  return dispatch => {
    let postData = socketMessageFactory(actions.SEND_ROLL_DICE, {});
    emitSocketMessage(socket, actions.MESSAGE, postData);
    dispatch(onPlayerAction(action.ON_ROLL_DICE));
  };
};

export const move_pawn = (socket, data) => {
  return dispatch => {
    let postData = socketMessageFactory(actions.SEND_MOVE_PAWN, data);
    emitSocketMessage(socket, actions.MESSAGE, postData);
    dispatch(onPlayerAction(action.ON_MOVE_PAWN));
  };
};

export const leave_player = socket => {
  return dispatch => {
    let postData = socketMessageFactory(actions.SEND_LEAVE, {});
    emitSocketMessage(socket, actions.MESSAGE, postData);
    dispatch(onPlayerAction(action.ON_LEAVE));
  };
};

const emitSocketMessage = (socket, eventName, data) => {
  socket.emit(eventName, data);
};

const socketMessageFactory = (class_name, data) => {
  return {
    class_name: class_name,
    params: { ...data }
  };
};

export const formatted_action = (action, payload) => {
  console.log("class  ", action, "  payload  ", JSON.stringify(payload));
  return {
    type: action,
    payload
  };
};

export const onPlayerAction = type => ({ type });

//socket.emit("message", {class_name: "join",params: {}});
//socket.emit("message", {"class": "roll_dice", "params": {}}));
//socket.emit("message", {"class": "move_pawn", "params": {"pawn_number": 2}})
//socket.emit("message", {"class": "leave", "params": {}})
