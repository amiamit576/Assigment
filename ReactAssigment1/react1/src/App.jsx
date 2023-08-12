
import Person from './component/Person'
import './App.css'
import Button from './component/Button'
import Header from './component/Header'
import List from './assets/List'


function App() {
 


  return (
    <>
      <div className='app'> 
       <Header text="This mypage"/>
      <Person name="Amit" age="26" />
      <Button text="clickme" onClick={onclick} />
      <List hobby={['liten music ', 'Coding', 'playing foootball']} />
      </div>

    </>
  )
}

export default App
