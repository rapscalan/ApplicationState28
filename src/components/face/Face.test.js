import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../store'; 
import Face, {getFace} from './Face';

describe('Face component', () => {
  it('renders Face', () => {
    //const wrapper = shallow(<Face emoji="😀" />);
    const wrapper = mount(<Provider store={store}><Face emoji="😀" /></Provider>); 
    expect(wrapper).toMatchSnapshot();
  });
});
  
