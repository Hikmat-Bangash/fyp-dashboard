import axios from "axios";
import {
  ApiRequestStart,
  GetComplaintsSuccess,
  AssignComplaintSuccess,
  GetSingleComplaintSuccess,
  APIRequestError,
  AddStatementSuccess,
  GetSupervisorComplaintsSuccess,
} from "../complatintSlice";
import { ConfigCredential } from "../Config";
import { GetSingleSupervisorSuccess } from "../supervisorSlice";

export const API = axios.create({ baseURL: "http://localhost:7000" });

// ASSIGN COMPLAINT
export const AssignComplaint = async (
  dispatch: any,
  supervisorId: any,
  complaintId: any
): Promise<any> => {
  dispatch(ApiRequestStart());
  try {
    const res = await API.patch(
      `api/v1/complaints/${supervisorId}/${complaintId}`,
      ConfigCredential
    );

    dispatch(AssignComplaintSuccess());
    return res.data;
  } catch (err: any) {
    if (err.response?.status == 401) {
      dispatch(APIRequestError(err.response.data));
      return err.response;
    } else if (err.response.status == 500) {
      dispatch(APIRequestError(err.response.statusText));
      return err.response;
    }
  }
};

// ADD STATEMENT TO COMPLAINT
export const AddStatement = async (
  complaintId: any,
  wsscStatement: any,
  dispatch: any
): Promise<any> => {
  dispatch(ApiRequestStart());
  try {
    const res = await API.patch(
      `api/v1/complaints/${complaintId}`,
      { wsscStatement },
      ConfigCredential
    );
    console.log(res.data);
    dispatch(AddStatementSuccess(wsscStatement));
    return res.data;
  } catch (err: any) {
    if (err.response?.status == 401) {
      dispatch(APIRequestError(err.response.data));
      return err.response;
    } else if (err.response.status == 500) {
      dispatch(APIRequestError(err.response.statusText));
      return err.response;
    }
  }
};

// Fetch Specific supervisor complaints
export const FetchSupervisorComplaints = async (
  supervisorId: any,
  dispatch: any
): Promise<any> => {
  dispatch(ApiRequestStart());
  try {
    const res = await API.get(
      `api/v1/complaints/supervisor/${supervisorId}`,
      ConfigCredential
    );
    dispatch(GetSupervisorComplaintsSuccess(res.data.allComplaints));
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response) {
      if (err.response.status == 404) {
        dispatch(APIRequestError(err.response.status));
        return err.response.status;
      } else {
        dispatch(APIRequestError("Something went wrong"));
        return err.response.status;
      }
    }
  }
};

// Fetching Complaints from Server
export const FetchAllComplaints = async (dispatch: any): Promise<any> => {
  dispatch(ApiRequestStart());
  try {
    const res = await API.get(`api/v1/complaints`, ConfigCredential);
    dispatch(GetComplaintsSuccess(res.data.allComplaints));
    console.log(res.data);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response) {
      if (err.response.status == 404) {
        dispatch(APIRequestError(err.response.status));
        return err.response.status;
      } else {
        dispatch(APIRequestError("Something went wrong"));
        return err.response.status;
      }
    }
  }
};

// fetch single complaint
export const FetchSingleComplaint = async (complaintId: any): Promise<any> => {
    console.log(complaintId)
  try {
    const res = await API.get(`api/v1/complaints/${complaintId}`, ConfigCredential);
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response) {
      if (err.response.status == 404) {
        return err.response.status;
      } else {
        return err.response.status;
      }
    }
  }
};


// Suprvisor Response API Called to update the complaint Status
export const SupervisorComplaintResponse = async (data: any) => {
  const { complaintId, ImageUrl, description } = data;
  
  console.log(`id: ${complaintId} | image: ${ImageUrl} | desc: ${description}`)
  try {
    const res = await API.patch(`api/v1/complaints/response/${complaintId}`, { ImageUrl, description }, ConfigCredential);
    console.log(res.data)
    return res.data;
  } catch (err: any) {
    console.log(err);
    if (err.response) {
      if (err.response.status == 404) {
        return err.response.status;
      } else {
        return err.response.status;
      }
    }
  }
}