
import { useSelector} from 'react-redux'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () =>{


    const { user } = useSelector(state => state.user)


    return(
        
        <div className='home__container'>
            <div className='left__container' >
                <Navbar />
                <div className='content'>content</div>
            </div>
            <div className='right__container'>
                right
            </div>

        </div>
    )

}

export default HomePage