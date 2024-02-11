import {Link} from 'react-router-dom'


function StudentList(props){
    
    const listArr = props.list
    const favList = props.favList
    const setFavList = props.setFavList

    const handleFav = (favId)=>{
        const fav = listArr.filter((item)=>{
            if(item.id === favId){
                return true
            }
            else{
                return false
            }
        })

        setFavList([...favList,{id:fav[0].id,name:fav[0].name}])
    }

    return(
        <div>
            <div className="bg-red-400 text-white flex p-5 gap-10">
                <p className="text-lg underline-offset-4 underline">List of Students</p>
                <Link to='/favourite'><p className="text-lg">Favourite of Students</p></Link>
            </div>

            <div>
                <ul className="mt-5 text-lg">
                    {listArr.map((item)=>{
                        return <li className="ml-5 my-5" key={item.id}>{item.id}. {item.name} <button className="bg-black text-white rounded px-2 ml-5" onClick={()=> handleFav(item.id)}>add to Favourite</button></li>
                    })}                    
                </ul>
            </div>
        </div>
    )
}

export default StudentList