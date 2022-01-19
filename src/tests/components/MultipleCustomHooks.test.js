
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';
import { useFech } from '../../hooks/useFech';


jest.mock('../../hooks/useFech')


describe('Pruebas en MultipleCustomHooks', () => {



  test('debe de mostrarse correctamente', () => {

        useFech.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow( <MultipleCustomHooks/> );
        expect( wrapper ).toMatchSnapshot();
  });

  test('debe de mostrar la info', () => {
    
        useFech.mockReturnValue({
            data: [{
                author: 'Andres',
                quote: 'Hola Mundo'
            }],
            loading: false,
            error: null
        })
        const wrapper = shallow( <MultipleCustomHooks/> );

        expect( wrapper.find('.alert').exists()).toBe( false )
        expect( wrapper.find('.mb-6').text().trim()).toBe( 'Hola Mundo' )
        expect( wrapper.find('footer').text().trim()).toBe( 'Andres' )
  });
  
  
});
