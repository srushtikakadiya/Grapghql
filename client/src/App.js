import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_TODOS, VIEW_TODOS } from "./Queries";
import { Card, CardBody, CardHeader, CardSubtitle, Spinner } from 'reactstrap';

function App() {
  const getAllTodos = useQuery(GET_TODOS);
  const todoInfo = useQuery(VIEW_TODOS, { variables: { id: 1 }});
  if (getAllTodos.loading || todoInfo.loading) return <Spinner color="dark" />;
  if (getAllTodos.error ||todorInfo.error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="container">
      <Card>
        <CardHeader>Query - Displaying all data</CardHeader>
        <CardBody>
          <pre>
            {JSON.stringify(getAllTodos.data, null, 2)}
          </pre>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>Query - Displaying data with args</CardHeader>
        <CardBody>
          <CardSubtitle>Viewing a todo by id</CardSubtitle>
          <pre>
            {JSON.stringify(todoInfo.data, null, 2)}
          </pre>
        </CardBody>
      </Card>
    </div>
  )
}

export default App;
