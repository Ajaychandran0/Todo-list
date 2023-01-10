import './App.css';
import { useState } from 'react';

function App() {

  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Add tasks ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => { setToDo(e.target.value) }} type="text" placeholder="🖊️ Add tasks to be completed" />
        <i onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])} className="fas fa-plus"></i>
      </div>
      <div className='title1'>Active tasks</div>
      <div className="todos">
        {
          toDos.map((obj) => {

            return (
              <div className="todo">
                <div className="left" >
                  <input onChange={(e) => {

                    console.log(e.target.checked)
                    console.log(obj)

                    setToDos(toDos.filter(obj2 => {
                      if (obj2.id === obj.id) {
                        obj2.status = e.target.checked
                      }
                      return obj2
                    }))
                  }}
                    value={obj.status} type="checkbox" name="" id={obj.id} />
                  <label className={obj.status ? "label":""} htmlFor={obj.id}>{obj.text}</label>
                </div>
                <div className="right">

                  <i onClick={(e) => {
                    setToDos(toDos.filter(obj2 => {

                      if (obj2.id !== obj.id) {
                        return obj2
                      }
                      return null

                    }));
                  }} className="fas fa-times"></i>

                </div>
              </div>
            )
          })
        }
        {
          <div className='title1 title'>Completed Tasks</div>
        }
        {
          toDos.map(obj => {
            if (obj.status) {
              return (
                <div>
                  <p className='completed'>{obj.text}</p>
                </div>
              )
            }
            return null
          })
        }
      </div>
    </div>
  );
}

export default App;
