import React from 'react';
import './App.css';

const classNames = require('classnames');

const Person = ({ person, columnNames, markedAPersonRow, markByClick }) => {
  const rowClassName = classNames({
    person,
    'person--male': person.sex === 'm',
    'person--female': person.sex === 'f',
    'person--lived-more-than-65-years': person.age > 65,
    'person--father': person.sex === 'm' && person.children,
    'person--mother': person.sex === 'f' && person.children,
    [`person--lived-in-${person.century}`]: true,
    'marked-person': markedAPersonRow === person.id,
  });

  const columnClassName = classNames({
    'person--born-before-1650': person.born < 1650,
    'person--died-after-1800': person.died > 1800,
  });

  return (
    <tr
      className={rowClassName}
      onClick={markByClick}
    >
      <td>{person.id}</td>
      <td className={columnClassName}>{person.name}</td>
      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>{person.age}</td>
      <td>{person.century}</td>
      <td>{person.mother}</td>
      <td>{person.father}</td>
      <td>{person.children}</td>
    </tr>
  );
};

export default Person;