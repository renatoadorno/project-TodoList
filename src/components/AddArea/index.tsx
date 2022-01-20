import { type } from '@testing-library/user-event/dist/type';
import React, { useState, KeyboardEvent } from 'react';
import { setConstantValue } from 'typescript';
import * as C from './styles'

type Props = {
  onEnter: (taskName: string) => void; // void significa que não retorna nada
}

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');
  const handleKeyUp = (e: KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== '') {
      onEnter(inputText)
      setInputText('')
    }
  }

  return (
    <C.Container>
      <div className='image'>➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={ inputText }
        onChange={ e => setInputText(e.target.value) }
        onKeyUp={ handleKeyUp }
      />
    </C.Container>
  );
}
