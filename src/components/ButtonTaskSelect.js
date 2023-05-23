import  { TaskSelectQuery }  from '../queries/TaskGroupQuery';
import { useDispatch } from 'react-redux';
//import { loadData } from 'features/SurveySlice';
import { useState } from 'react';
import { TaskActions } from 'utils/TaskReducers';

export const TaskSelect= () => {

  const dispatch = useDispatch()  
  const [dataLoaded, setDataLoaded] = useState(false)

    const fetchData = async () => {
      try {
        const response = await TaskSelectQuery();
        const data = await response.json();
        console.log(data)
        dispatch(TaskActions.loadFromServer(data.data.taskPage));
      } catch (error) {
        console.error('Error fetching group names:', error);
      }
    };
 
  return (
    <div>
      <button class="btn btn-primary" onClick={fetchData} disabled={dataLoaded} >LoadM</button>
    </div>
  )
}