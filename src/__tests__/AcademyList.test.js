import React from "react";
import {shallow} from 'enzyme';
import Academy from "./../components/academy/Academy";
import AcademyList from './../components/academy/AcademyList';


describe("Render AcademyList Component ", () => {


  it('should return null when academies prop is null', () =>{
      const wrapper = shallow(<Academy academies={null} />);
      expect(wrapper.find('table').length).toEqual(0);
  });

  it('table body should return 3 rows when academies prop length is set 3', () =>{
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
      const wrapper = shallow(<AcademyList academies={academies} />);
      expect(wrapper.find('Academy').length).toEqual(3);
  });
});
