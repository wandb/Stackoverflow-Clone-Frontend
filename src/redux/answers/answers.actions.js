import {setAlert} from '../alert/alert.actions';
import {
  GET_ANSWERS,
  ANSWER_ERROR,
  ADD_ANSWER,
  DELETE_ANSWER,
} from './answers.types';
import {
  allAnswersData,
  createSingleAnswer,
  deleteSingleAnswer,
} from '../../api/answersApi';

export const getAnswers = id => async dispatch => {
  try {
    const res = await allAnswersData(id);

    dispatch({
      type: GET_ANSWERS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ANSWER_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

// Add Answer
export const addAnswer = (postId, formData) => async dispatch => {
  try {
    const res = await createSingleAnswer(postId, formData);

    dispatch({
      type: ADD_ANSWER,
      payload: res.data.data,
    });

    dispatch(setAlert(res.data.message, 'success'));

    dispatch(getAnswers(postId));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));

    dispatch({
      type: ANSWER_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

// Delete Answer
export const deleteAnswer = AnswerId => async dispatch => {
  try {
    const res = await deleteSingleAnswer(AnswerId);

    dispatch({
      type: DELETE_ANSWER,
      payload: AnswerId,
    });

    dispatch(setAlert(res.data.message, 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));

    dispatch({
      type: ANSWER_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};
