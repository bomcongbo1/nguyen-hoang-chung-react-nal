export interface IAction {
    type: string;
    payload: any;
    onSuccess?: (payload?: any) => void;
    onError?: (payload?: any) => void;
  }

  export interface IReducer {
    loaderReducer: any;
    blogReducer: any;
  }