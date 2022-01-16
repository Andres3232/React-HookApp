import { renderHook,act } from '@testing-library/react-hooks'
import { useFech } from '../../hooks/useFech';


describe('pruebas enn useFecth', () => {
    test('debe de retornar la informacion por defecto', () => {
       
        const { result } = renderHook( () => useFech('https://www.breakingbadapi.com/api/quotes/1)' ))
        
        const { data, loading, error } = result.current;
        expect( data ).toBe(null);
        expect( loading ).toBe(true);
        expect( error ).toBe(null);
    })

    test('debe de tener la info deseada, loadin en false error false ', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFech('https://www.breakingbadapi.com/api/quotes/1' ))
        await waitForNextUpdate()
        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1);
        expect( loading ).toBe(false);
        expect( error ).toBe(null);
    })

    test('debe demanejar el error ', async() => {
        const { result, waitForNextUpdate } = renderHook( () => useFech('https://reqres.in/apid/users?page=2' ))
        await waitForNextUpdate()
        const { data, loading, error } = result.current;

        expect( data ).toBe(null);
        expect( loading ).toBe(false);
        expect( error ).toBe('no se pudo cargar la info');
    })
    
    
})
