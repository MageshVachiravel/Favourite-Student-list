import { useState } from "react"
import StudentList from "./components/StudentList"
import FavouriteList from "./components/FavouriteList"
import {BrowserRouter , Routes , Route} from 'react-router-dom'


function App(){

    const [listArr,setListArr] = useState([
        {
            id:1,
            name:"magesh"
        },
        {
            id:2,
            name:"Shanavas"
        },{
            id:3,
            name:"Sandhiya"
        },
        {
            id:4,
            name:"Vijay"
        },{
            id:5,
            name:"Monica"
        },
        {
            id:6,
            name:"Dharshini"
        }
    
    ])


    const [favList,setFavList] = useState([])

    return(
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<StudentList list={listArr} favList={favList} setFavList={setFavList}/>}></Route>
            <Route path='/favourite' element={<FavouriteList favList={favList} setFavList={setFavList} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App