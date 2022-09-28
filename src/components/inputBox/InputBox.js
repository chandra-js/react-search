import React, {useState, useEffect, useContext} from 'react';
import dataContext from '../../provider/DataProvider';
import { SearchAPI } from '../../services/SearchService';
import './InputBox.css'

const InputBox = () =>{

    const [search, setSearch]=useState('')
    const [data,setData] = useContext(dataContext)
    // console.log(getContext)
    const getSearchData = () =>{
        if(search.length){
            SearchAPI(search).then((response)=>{
                setData(response)

            }).catch((error)=>{
                console.log(error)
            })
        }

    }

    useEffect(()=>{
        const delay = 300
        const handler = setTimeout(() => {
            getSearchData()
          }, delay);
          return () => {
            clearTimeout(handler);
          };
    },[search])

    const SearchInput = (value) =>{
        setSearch(value)
    }


    return (
        <div>
            <input 
                className="search-box" 
                type="text" 
                placeholder="Search like ditto" 
                name="search-box" 
                value={search}
                onChange ={(e)=>{SearchInput(e.target.value)}}
                />
        </div>
    )

}

export default InputBox;