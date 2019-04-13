import React from 'react';
import { storiesOf } from '@storybook/react';
import AcademyList from '../components/academy/AcademyList';

const academies = [
    {
      id: 1,
      title: "Agile Theory1"
    },
    {
      id: 2,
      title: "Agile Theory2"
    },
    {
      id: 3,
      title: "Agile Theory3"
    }
  ];

storiesOf('AcademyList', module)
  .add('with academies array', () => (
    <AcademyList academies={academies} />
  ))