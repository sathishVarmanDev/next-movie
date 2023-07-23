import React, {useContext} from 'react'
import Hero from './Hero'
import ReleasesContext from '../../context/releasesContext'

export default function Releases() {
    const newReleases = useContext(ReleasesContext)
    console.log(newReleases);
    return (
        <div>
            <Hero
            />
        </div>
    )
}
