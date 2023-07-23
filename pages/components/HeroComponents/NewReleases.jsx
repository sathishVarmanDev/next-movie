import React, { useContext } from 'react'
import releaseStyles from "../../css/release.module.css"
import { Context } from '../../../context/context'

export default function NewReleases() {
  const { newReleases } = useContext(Context)
  console.log("newReleases", newReleases.data);
  return (
    <div className='min-vh-100 min-vw-100 bg-danger'>
      <div className="container">
        <div className="row">
          <h1 className={releaseStyles.releaseHeader}>New Releases</h1>
          <a className>View More</a>
        </div>
        <div className='d-flex flex-row'>
          {newReleases.data?.slice(0, 2).map((movie, index) => {
            return <div className='w-25' key={index.toString()} style={{
              backgroundImage: `url(${movie.Poster})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '500px',
              height: '300px',
            }}>
              hello
            </div>
          })}
        </div>
        <div>
          {newReleases.data?.slice(2).map((movie, index) => {
            return <div className='w-25' key={index.toString()}  style={{
              backgroundImage: `url(${movie.Poster})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              width: '500px',
              height: '300px',
            }}>
              hello
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
