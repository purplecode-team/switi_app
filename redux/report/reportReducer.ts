import produce from 'immer';
import {
  GET_STUDY_IN_PROGRESS,
  GET_STUDY_IN_PROGRESS_SUCCESS,
  GET_STUDY_MEMBER,
  GET_STUDY_MEMBER_SUCCESS,
  POST_REPORT,
  POST_REPORT_FAILURE,
  POST_REPORT_SUCCESS,
} from '../action';
import axios from 'axios';
import createRequestThunk from '../lib/createRequestThunk';
import { HostURL } from '../url';

export interface IReportState {
  studyInProgressList: any;
  studyMemberList: any;
}

const initialState = {
  studyInProgressList: [],
  studyMemberList: [],
};

const studyInProgress = async (token: string) => {
  const response = await axios({
    method: 'get',
    url: `${HostURL}/report/getReportList`,
    headers: { Authorization: token },
  });
  return response;
};

const studyMember = async (token: string, studyId: number) => {
  const response = await axios({
    method: 'get',
    url: `${HostURL}/report/getReportInfo/${studyId}/`,
    headers: { Authorization: token },
  });
  return response;
};

const report = async (
  token: string,
  studyId: number,
  memberId: number,
  content: string
) => {
  const response = await axios({
    method: 'post',
    url: `${HostURL}/report/reportUser/${studyId}/${memberId}`,
    headers: { Authorization: token },
    data: { content: content },
  });
  console.log('reducer 신고하기', studyId, memberId, content);
  console.log('reducer 신고하기', response.data);
  return response;
};

export const studyInProgressRequest = createRequestThunk(
  GET_STUDY_IN_PROGRESS,
  studyInProgress
);

export const studyMemberRequest = createRequestThunk(
  GET_STUDY_MEMBER,
  studyMember
);

export const reportRequest = createRequestThunk(POST_REPORT, report);

function reportReducer(state = initialState, action: any) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_STUDY_IN_PROGRESS_SUCCESS:
        draft.studyInProgressList = action.payload.study;
        break;
      case GET_STUDY_MEMBER_SUCCESS:
        draft.studyMemberList = action.payload.member;
        break;
      case POST_REPORT_SUCCESS:
        // 이런건 리덕스로 처리하면 안된다.
        break;
      case POST_REPORT_FAILURE:
        console.log(action);
        break;
      default:
        break;
    }
  });
}

export default reportReducer;
