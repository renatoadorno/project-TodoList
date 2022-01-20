import React, { useState }  from 'react';
import { type } from 'os';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)
  return (
    <C.Container done={ isChecked }>
      <input type="checkbox"
        checked={ isChecked }
        onChange={e => setIsChecked(e.target.checked)}
        name=""
        id=""
      />
      <label htmlFor="">{ item.name }</label>
    </C.Container>
  );
}
