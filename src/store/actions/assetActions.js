import { httpGet } from "../../helpers/network"

export const getData = (endPoint) => {
    return (dispatch, getState, getResult) => {
        getResult = httpGet(endPoint)
            .then((res) => {
                if (res.status !== 200) {
                    dispatch({ type: 'FETCH_ERROR', response: res });
                    console.log('err :',res);
                    if(res.status === 401)
                        dispatch({type: 'AuthExpired', response:res});
                }
                else {
                    dispatch({ type: 'FETCH_SUCCESS', response: res.data });
                }
            }).catch((err) => {                
                dispatch({ type: 'FETCH_ERROR', response: err });
            })
    }
}