import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Rafael Itajahy" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, earum quae. Vero a libero magni incidunt repellat consequatur, et quas aliquid. Magni ab perferendis eaque, enim blanditiis accusantium rem esse." 
          />  
        </main>
      </div>
  
    </div>   
  )
}

export default App

