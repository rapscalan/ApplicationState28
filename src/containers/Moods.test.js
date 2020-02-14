import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../store'; 
import Moods from './Moods';
import { getFace } from '../data/selectors/moodsSelectors';
// import C

let wrapper = null;
describe('Moods', () => {
  
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Moods /></Provider>);
  });
  describe('mood selectors', () => {

    it('is very angry if tired and hungry', () => {
      expect(getFace({ coffees: 0, naps: 0, snacks: 0 })).toEqual('🤬');
    });

    it('is sick if hyper and hungry', () => {
      expect(getFace({ coffees: 4, snacks: 0 })).toEqual('🤮');
    });

    it('is sleeping if tired', () => {
      expect(getFace({ coffees: 0, naps: 0 })).toEqual('😴');
    });

    it('is crazy if hyper', () => {
      expect(getFace({ coffees: 4, naps: 0, snacks: 1, studies: 0 })).toEqual('🙀');
    });

    it('is mindblown if educated', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 3 })).toEqual('🤯');
    });

    it('is angry if hungry', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 0, studies: 0 })).toEqual('😡');
    });

    it('is happy if not tired, hungry, educated, or hungry', () => {
      expect(getFace({ coffees: 1, naps: 0, snacks: 1, studies: 0 })).toEqual('😀');
    });
  });

  describe('container', () => {
    beforeEach(() => {
      wrapper = mount(<Provider store={store}><Moods /></Provider>);
    });
    it('matches a snapshot', () => {
      // const wrapper = mount(<Provider store={store}><Moods /></Provider>);
      expect(wrapper).toMatchSnapshot();
    });

    // it('updates state on DRINK_COFFEE selection', () => {
    //   //const wrapper = shallow(<Moods />);
    //   const wrapper = mount(<Provider store={store}><Moods /></Provider>);
    //   console.log(wrapper);
    //   wrapper.instance().handleSelection('DRINK_COFFEE');

    //   expect(wrapper.state('coffees')).toEqual(1);
    // });

    // it('updates state on TAKE_NAP selection', () => {
    //   //const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelection('TAKE_NAP');

    //   expect(wrapper.state('naps')).toEqual(1);
    // });

    // it('updates state on EAT_SNACK selection', () => {
    //   //const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelection('EAT_SNACK');

    //   expect(wrapper.state('snacks')).toEqual(1);
    // });

    // it('updates state on STUDY selection', () => {
    //   //const wrapper = shallow(<Moods />);
    //   wrapper.instance().handleSelection('STUDY');

    //   expect(wrapper.state('studies')).toEqual(1);
    // });
  });
});
