import './App.scss'

import jobListings from './data.json';
import JobListing from "./JobListing";

function App() {

    return (
        <main className="App">
            <header></header>

            <div className={'listings-wrapper'}>
                {jobListings.map(listing => {
                    return <JobListing listing={listing} key={listing.id}/>
                })}
            </div>

        </main>
    )
}

export default App
