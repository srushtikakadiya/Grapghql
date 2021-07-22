import { gql } from 'apollo-boost';

export const GET_TODOS = gql`
  {
    getTodos {
      id,
      title,
      desc
      
    }
  }
`;

export const VIEW_TODOS = gql`
  query ($id: Int){
    getTodoInfo(id: $id) {
      id,
      title,
      desc
    }
  }
`;

export const ADD_TODO = gql`
  mutation($name: String, $email: String, $job_title: String) {
    createTodo (title: $title, desc: $desc)
  }
`;

export const EDIT_TODO = gql`
  mutation($id: Int, $title: String, $desc: String) {
    updateTodoInfo (id: $id, title: $title, desc: $desc)
  }
`;

export const DELETE_TODO = gql`
  mutation($id: Int) {
    deleteTodo(id: $id)
  }
`
