import React from 'react'
import Filter from '../components/Filter'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Card from '../components/Card'

const JobList = ({ retry }) => {
  const { jobs, isLoading, error } = useSelector((store) => store.jobReducer)
  console.log(jobs);
  return (
    <div className='list-page'>
      <Filter />

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error message={error} retry={retry}/>
      ) : (
        <div className='cards-wrapper'>
          {jobs.map((i) => (
            <Card key={i.id} job={i} />
          ))

          }
        </div>
      )}
    </div>
  )
}

export default JobList