import {create, ApiResponse, ApisauceInstance} from 'apisauce';
import {AxiosRequestConfig} from 'axios';

const ApiBase: ApisauceInstance = create({
  baseURL: 'http://5f55a98f39221c00167fb11a.mockapi.io'
});

export const ApiClient = {
  get: <T, U = T>(
    url: string,
    params?: {},
    axiosConfig?: AxiosRequestConfig & {isRaw?: boolean},
  ) => {
    return ApiBase.get<T, U>(url, params, axiosConfig).then((res) => axiosConfig?.isRaw ? res : res.data);
  },
}
ApiBase.addResponseTransform((response: ApiResponse<any>) => {
  if (!response.status || ![200, 201].includes(response.status)) {
    response.data = response.data || {};
    if (!response.config?.headers.noShowErr) {
      throw new Error(response.data.message || response.data.error);
    }
  }
});