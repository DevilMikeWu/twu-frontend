import React from "react";
import {shallow} from 'enzyme';
import Academy from "./../components/academy/Academy";


describe("Render Academy Components", () => {
  it('should return null when academies prop is null', () =>{
      const wrapper = shallow(<Academy academy={null} />);
      expect(wrapper.find('table').length).toEqual(0);
  });
});
