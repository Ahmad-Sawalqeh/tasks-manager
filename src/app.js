import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { setList, setWantedListToShow } from './actions/actionCreater';
import TasksBoard from './components/tasksBoard';
import './app.css';

/*
** Task Manager MVC
  1. add item
  2. delete item
  3. edit item
  4. clear tasks list
  5. complete one item
  6. display tasks list
  7. delete all completed items
  8. make all items complete, all at once
  9. show only completed/active/all items
*/

const initialList = {
  "tasks": [
       {
          "id": 8688789987070970897,
          "value": "create sitemap sketch, wireframe and mock-up.",
          "currentStatus": {
              "number": 3,
              "state" : "completed"
          },
          "isEditing": false,
      },
      {
          "id": 86887899875454545457,
          "value": "select technoogies stack (programming languages, frameworks and CMS).",
          "currentStatus": {
              "number": 3,
              "state" : "completed"
          },
          "isEditing": false,
      },
      {
          "id": 65765686575454545457,
          "value": "create colorfull page layouts and gets client's feedback also change the layout if required, test and upload the website to server.",
          "currentStatus": {
              "number": 1,
              "state" : "In-Progress"
          },
          "isEditing": false,
      },
      {
          "id": 657656478788487645457,
          "value": "take 1 hour break before starting of building the initial website interface.",
          "currentStatus": {
              "number": 2,
              "state" : "canceled"
          },
          "isEditing": false,
      },
      {
          "id": 657656478788445435457,
          "value": "build website by adding special features and interactivity.",
          "currentStatus": {
              "number": 0,
              "state" : "Not-Started"
          },
          "isEditing": false,
      },
      {
          "id": 6576589789988445435457,
          "value": "get content ready with the power of SEO.",
          "currentStatus": {
              "number": 1,
              "state" : "In-Progress"
          },
          "isEditing": false,
      },
      {
          "id": 6578889789988445435457,
          "value": "fix bugs ASAP and keep it up to date.",
          "currentStatus": {
              "number": 0,
              "state" : "Not-Started"
          },
          "isEditing": false,
      }
  ]
}

function App(){

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setList(initialList.tasks))
    dispatch(setWantedListToShow(initialList.tasks));
  }, [dispatch])

  return (
    <>
      <div className='container mt-5'>
        <div className='card'>
          <h1 className='my-5 font-weight-bold text-center'>Tasks Manager</h1>
          <TasksBoard />
        </div>
      </div>
    </>
  );

}

export default App;
