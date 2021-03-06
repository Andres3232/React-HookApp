import { shallow } from "enzyme";
import { TodoList } from "../../../components/07-userReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";



describe('Pruebas en TodoList', () => {
  
    const handleDelete = jest.fn()
    const handleToggle = jest.fn()

    const wrapper = shallow(
        <TodoList
            todos={ demoTodos }
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
        
        />
    )

    test('debe de mostrase correctamente', () => {
      
        expect( wrapper ).toMatchSnapshot()
    });

    test('debe de tener dos todolistItem', () => {
      
        expect( wrapper.find('TodoListItem').length).toBe( demoTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function))

    });
    
});
