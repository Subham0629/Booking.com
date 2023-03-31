import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAttractionData } from '../Redux/attractionData/action'
import AttractionDataList from './AttractionDataList'

const AttractionData = () => {
    const dispatch = useDispatch()
    const state = useSelector((store) => store.attractionReducer.attractionData)
    console.log(state)

    useEffect(() =>{
      dispatch(getAttractionData)
    },[])
  return (
    <div>
        {state && state.map((item) =>{
            return <AttractionDataList key={item.id} {...item}/>
        })}
    </div>
  )
}

export default AttractionData