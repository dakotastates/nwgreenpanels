
import { useSelector} from 'react-redux'
import Navbar from '../components/Navbar/Navbar'
import Components from '../components/Components/Components'
import Cart from '../components/Cart/Cart'

const HomePage = () =>{


    const { user } = useSelector(state => state.user)


    return(
        
        <div className='home__container'>
            <div className='left__container' >
                <Navbar />
                <Components />
            </div>
            <div className='right__container'>
                <Cart />
            </div>

        </div>
    )

}

export default HomePage