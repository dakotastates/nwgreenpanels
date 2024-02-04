import {useState, useEffect, useRef} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useSelector} from 'react-redux'
import Navbar from './components/Navbar/Navbar'

import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage"
import ProjectPage from "./pages/ProjectPage"
import AuthPage from "./pages/AuthPage";
import './App.css';
import ModalContent from './components/ModalContent/ModalContent';



function App() {
  const { user } = useSelector(state => state.user)

  const [toggleModal, setToggleModal] = useState(false)
  const [modalTarget, setModalTarget] = useState(null)


  const refModal = useRef(null) 

  const handleOpenModal = (id) =>{
      setModalTarget(id)
      setToggleModal(!toggleModal)

  }

  const closeOpenModal = e =>{
      if(!refModal.current?.contains(e.target)){
          setToggleModal(false) 
      }
  } 


  useEffect(()=>{
    document.addEventListener('click', closeOpenModal, true)
},[])  
  

  return (
    <>
    <Router>
    {user ? 
      <div className='App'>
        <Navbar handleOpenModal={handleOpenModal} />

          <div className='main__container'>
            <div className="main__content">
            <Routes>
              <Route path='/projects/:id' element={<><ProjectPage handleOpenModal={handleOpenModal}/></>} />
              <Route path='/projects' element={<><ProjectsPage/></>} />
              <Route path='/' element={<><ProjectsPage/></>} />
              <Route path="*" element={<><NotFound/></>}/>
            </Routes>
            {toggleModal? 
                <div className='form__modal'>
                    <div className="form__modal-content" ref={refModal}>
                        {/* <ModalContent /> */}
                        <ModalContent modalTarget={modalTarget} handleOpenModal={handleOpenModal} />
                    </div>
                </div> 
            : null}
            </div>
          </div>
      </div>
      : 
      <div className='app__auth-page'>
        <Routes>
          <Route path='/' element={<><AuthPage /></>} />
          <Route path="*" element={<><NotFound/></>}/>
        </Routes>
      </div>
    }
    </Router>
    </>
  );
}

export default App;
