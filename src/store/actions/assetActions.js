import { httpGet } from "../../helpers/network"

export const getData = (endPoint) => {
    return (dispatch, getState, getResult) => {
        getResult = httpGet(endPoint)
            .then((res) => {
                if (res.status !== 200) {
                    dispatch({ type: 'FETCH_ERROR', response: res });
                    console.log('err :',res);
                    dispatch({type: 'AuthExpired', response:res});
                }
                else {
                    dispatch({ type: 'FETCH_SUCCESS', response: res.data });
                }
            }).catch((err) => {
                console.log('err',err);
                dispatch({ type: 'FETCH_ERROR', err });
            })
    }
}