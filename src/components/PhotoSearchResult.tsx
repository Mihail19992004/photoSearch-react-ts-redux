import React, {FC, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelection";
import {fetchPhotos} from "../store/action-creators/photos";
interface PhotoSearchResultProps {
    search: string

}

const PhotoSearchResult:FC<PhotoSearchResultProps> = ({search}) => {
    const dispatch = useDispatch()
    const {photos,error,loading} = useTypedSelector(state => state.photos)
    useEffect(()=> {
        dispatch(fetchPhotos(search))
    }, [search])
    console.log(photos)
    if (loading) {
        return <h1>Загрузка</h1>
    }
    if (error) {
        return <h1>Произошла ошибка</h1>
    }
    return (
        <div>
            {photos.map(photo=> <img src={photo.previewURL} alt=""/>)}
        </div>
    );
};

export default PhotoSearchResult;