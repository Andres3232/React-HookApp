import React from 'react'
import { shallow } from 'enzyme'
import { HookApp } from '../HookApp'


describe('Pruebas con el componente <HookApp/>', () => {
    test('Debe mostrarse correctamente  ', () => {
        
        const wrapper = shallow(<HookApp/>);
        expect(wrapper).toMatchSnapshot();
    })
    
})