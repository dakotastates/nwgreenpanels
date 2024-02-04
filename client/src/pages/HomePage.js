// import {useEffect} from 'react'
// import {useDispatch, useSelector} from 'react-redux'
// import {getProjects} from '../store/project'
// import Navbar from '../components/Navbar/Navbar'
import Components from '../components/Components/Components'
import Cart from '../components/Cart/Cart'

const HomePage = () =>{

    // const dispatch = useDispatch() 
    // const { projects } = useSelector(state => state.project)

    // useEffect(()=>{
    //     dispatch((getProjects()))
    // },[])

    return(
        
        <div className='home__container'>
            <div>Home Dashboard</div>
            <div className='home__dashboard'>
                <div>
                    <div>Most Recent Projects </div>

                    <div>All Projects</div>
                </div>
                <div>Manage Profile</div>
                <div>Manage Components</div>
            </div>
        </div>
    )

}

export default HomePage


{/* <div className='left__container' >
<Navbar />
<Components />
</div>
<div className='right__container'>
<Cart />
</div> */}