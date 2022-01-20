import React, { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem/index';
import { AddArea } from './components/AddArea/index'


function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Exemplo 1', done: false },
    { id: 2, name: 'Exemplo 2', done: true }
  ]);

  const handleAddTask = (taskname: string) => {
    let newList = [...list] // clone do list, pois o push n funciona no list diretamente
    newList.push({
      id: list.length + 1,
      name: taskname,
      done: false
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.H1>Lista de Tarefas</C.H1>

        <AddArea onEnter={ handleAddTask }/>

        {list.map((item, index) => (
          <ListItem
            key={ index }
            item={ item }
          />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;
