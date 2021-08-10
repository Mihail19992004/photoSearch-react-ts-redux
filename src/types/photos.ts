export interface PhotoState {
    photos: any[]
    loading: boolean
    error: null | string
}

export enum ActionPhotoEnum {
    FETCH_PHOTO = 'FETCH_PHOTO',
    FETCH_PHOTO_SUCCESS = "FETCH_PHOTO_SUCCESS",
    FETCH_PHOTO_ERROR = "FETCH_PHOTO_ERROR"
}
interface ActionPhotoFetch {
    type: ActionPhotoEnum.FETCH_PHOTO
}
interface ActionPhotoFetchSuccess {
    type: ActionPhotoEnum.FETCH_PHOTO_SUCCESS
    payload: any[]
}
interface ActionPhotoFetchError {
    type: ActionPhotoEnum.FETCH_PHOTO_ERROR
    payload: string
}

export type ActionPhoto = ActionPhotoFetch | ActionPhotoFetchSuccess | ActionPhotoFetchError