import {ActionPhoto, ActionPhotoEnum, PhotoState} from "../../types/photos";


const initState: PhotoState = {
    photos: [],
    loading: false,
    error: null
}



export const photoReducer = (state=initState, action: ActionPhoto): PhotoState => {
    switch (action.type) {
        case ActionPhotoEnum.FETCH_PHOTO:
            return {error: null,loading: true, photos: []}
        case ActionPhotoEnum.FETCH_PHOTO_SUCCESS:
            return {photos: action.payload, loading: false, error: null}
        default:
            return state
    }
}