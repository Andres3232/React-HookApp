import { todoReducer } from "../../../components/07-userReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";




describe('Puebas en todoReducer', () => {
    
    test('debe de retonntar en estado por defecto', () => {
       
        const state = todoReducer( demoTodos, {} )
        expect( state ).toEqual( demoTodos )

    });

    test('debe de agregar un TODO', () => {
        
        const action = {

            type: 'add',
            payload: {
                
                id: 3,
                desc: 'Apreder Jest',
                done: false
            }
        }

        const state = todoReducer( demoTodos, action )
        expect( state.length ).toBe(3)
        expect( state ).toEqual([...demoTodos,action.payload])
        
    });

    test('debe de borrar un TODO', () => {
      
        const action = {

            type: 'delete',
            payload:1

        }

        const state = todoReducer( demoTodos, action )
        expect( state.length ).toBe(1)
        expect( state ).toEqual( [demoTodos[1]] )
     
        

    });

    test('debe de hacer el toggle del TODO', () => {
      
        const action = {

            type: 'toggle',
            payload:1

        }
        
        const state = todoReducer( demoTodos, action )
        expect( state[0].done ).toBe(true)
        expect( state[1] ).toEqual( demoTodos[1] )
        
    });
    
});
