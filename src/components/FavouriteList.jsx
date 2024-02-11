import { eventWrapper } from '@testing-library/user-event/dist/utils'
import {Link} from 'react-router-dom'


function FavouriteList(props){

    
    const favList = props.favList
    const setFavList = props.setFavList


    function handleDelete(deleteId){

        const tempArr = favList.filter((item)=>{
            if(deleteId === item.id){
                return false
            }
            else{
                return true
            }
        })

        setFavList(tempArr)
    }

    return(
        <div>
            <div className="bg-red-400 text-white flex p-5 gap-10">
                <Link to='/'><p className="text-lg">List of Students</p></Link>
                <p className="text-lg underline-offset-4 underline">Favourite of Students</p>
            </div>

            <div>
                <ul className="mt-5 text-lg">
                {favList.map((item,index)=>{
                        return <li className="ml-5 my-5" key={index}> {index+1}. {item.name} <button className="bg-red-600 text-white rounded px-6 ml-5" onClick={()=>handleDelete(item.id)}>Remove</button></li>
                    })} 
                </ul>
            </div>
        </div>
    )
}

export default FavouriteList