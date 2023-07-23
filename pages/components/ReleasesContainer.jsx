import React, {useContext} from 'react'
import Hero from './Hero'
import NewReleases from './HeroComponents/NewReleases'
export default function ReleasesContainer() {
    return (
        <div>
            <Hero />
            <NewReleases />
        </div>
    )
}
