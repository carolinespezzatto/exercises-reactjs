import './App.css'
import { useEffect, useState} from 'react'
import { Home } from './components/Home'
import { Work } from './components/Work'
import { Blog } from './components/Blog'
import { About } from './components/About'

function App() {

  const activeHome = () => setComponent('home')

  const [component, setComponent] = useState('work')
  
  const activeWork = () => setComponent('work')

  const activeBlog = () => setComponent('blog')

  const activeAbout = () => setComponent('about')

  useEffect(() => {
  }, [component])

  return (
    <>   
      <div className="container">
        <div className='img'>
          {component === 'home' && (<Home />)}
          {component === 'work' && (<Work />)}
          {component === 'blog' && (<Blog />)}
          {component === 'about' && (<About />)}
        </div>
        <div className='buttons'>
          <button 
            className='btn--home' 
            onClick={activeHome}>
          <p>Home</p> 
          </button>
          <button 
            className='btn--work' 
            onClick={activeWork}>
          <p>Work</p>
          </button>
          <button 
            className='btn--blog' 
            onClick={activeBlog}>
          <p>Blog</p>
          </button>
          <button  
            className='btn--about' 
            onClick={activeAbout}>
          <p>About Us</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default App