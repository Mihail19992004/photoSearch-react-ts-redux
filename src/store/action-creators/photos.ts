import {Dispatch} from "redux";
import {ActionPhoto, ActionPhotoEnum} from "../../types/photos";
import axios from "axios";

export const fetchPhotos = (query: string) => {
    return async (dispatch: Dispatch<ActionPhoto>) => {
        try {
            dispatch({type: ActionPhotoEnum.FETCH_PHOTO})
            const response = await axios.get(`https://pixabay.com/api/?key=21790151-366f24d1b8589868b2f99a89c&q=${query}&max_width=300&max_height=200&image_type=photo`)
            dispatch({type: ActionPhotoEnum.FETCH_PHOTO_SUCCESS, payload: response.data.hits})
        } catch (e) {
            dispatch({type: ActionPhotoEnum.FETCH_PHOTO_ERROR, payload: 'Ошибка запроса'})
        }
    }
}