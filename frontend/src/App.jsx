import './App.css'
import AddBlogs from '../components/AddBlogs'
import AddProjects from '../components/AddProjects'
import AddEvent from '../components/AddEvent'
import AddExistingEvent from '../components/AddExistingEvent'
import AddResource from '../components/AddResource'
import AddProjectMember1 from '../components/AddProjectMember1'
import AddGallery from '../components/AddGallery'

function App(){

  return (
    <>
      <AddBlogs />
      <AddProjects />
      <AddProjectMember1/>
      <AddEvent/>
      <AddExistingEvent/>
      <AddResource/>
      <AddGallery/>
    </>
  )

}

export default App
