import React from 'react'
import DonorSummary from './DonorSummary'

const DonorList = ({donors}) => {
  return (
    <div>
        <div class="row">
      {donors && donors.map(donor =>{
          return(
          <DonorSummary donor={donor} key={donor.id}/>
          )
      })}
      </div>
    </div>
  )
}

export default DonorList
