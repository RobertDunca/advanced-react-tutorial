import Item from './Person';
import {memo} from 'react';

const List = ({ people, removePerson }) => {
  return (
    <div>
      {people.map((person) => {
        return <Item removePerson={removePerson} key={person.id} {...person} />;
      })}
    </div>
  );
};
export default memo(List);
