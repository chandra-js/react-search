import React, { useContext }from 'react';
import dataContext from '../../provider/DataProvider'
import './Items.css'

const Items = () =>{
    const [data] = useContext(dataContext)
    const itemsKeys ={
        'abilities' :{
            parent:'abilities',
            child: 'ability'
        },
        'stats':
        {
            parent:'stats',
            child: 'stat'
        },

        'held_items' :
        {
            parent:'held_items',
            child: 'item'
        },

    }
    const showData = (value) =>{
        if(data[value.parent]){
        return data[value.parent].map((res)=>{
            return (
                <div className='child-container' key={res[value.child].url}>
                    <div> Name : {res[value.child].name}</div>
                </div>
            )
        })
        }
    }

    const showImages = (value) =>{
        if(data[value]){
            let tempArr=[]
            Object.keys(data[value]).forEach(key=>{
               if(data[value][key] && typeof data[value][key] ==='string'){
                tempArr.push(data[value][key]);
               }
            })
        return tempArr.map((res)=>{
            return (
                <div className='child-container' key={res}>
                    <img src={res} className="images" />
                </div>
            )
        })
        }
    }



    return (
        <div className='items-container'> 
           {Object.keys(data).length ?
            <>
                <p className='text-header'>Abilities</p>
                <div className='parent'>
                    {showData(itemsKeys.abilities)}
                </div>
                <p className='text-header'>Images</p>
                <div className='parent'>
                    {showImages('sprites')}
                </div>
                <p className='text-header'>Stats</p>
                <div className='parent'>
                    {showData(itemsKeys.stats)}
                </div>
                <p className='text-header'>Held Items</p>
                <div className='parent'>
                    {showData(itemsKeys.held_items)}
                </div>
            </>
            :
            <div className='no-item-found'> No Items Found</div>
        }                       

        </div>
    )

}

export default Items;