import './App.scss'

import jobListings from './data.json';
import JobListing from "./JobListing";
import {useState} from "react";
import JobFilter from "./JobFilter";

function App() {

    const [filteredListings, setFilteredListings] = useState(jobListings);
    const [filters, setFilters] = useState<Array<string>>([]);

    const handleAddFilter = (tag: string): void => {

        if (filters.includes(tag)) {
            return;
        }

        setFilters(oldFilters => [...oldFilters, tag]);
        setFilteredListings(filteredListings.filter(listing => [listing.level, listing.role, ...listing.tools, ...listing.languages].includes(tag)));
    }

    const clearFilters = (): void => {
        setFilters([]);
        setFilteredListings(jobListings);
    }

    const removeFilter = (tag: string): void => {
        const newFilters = filters.filter(t => t !== tag);

        setFilters(newFilters);

        if (newFilters.length) {
            setFilteredListings(jobListings.filter(listing => newFilters.every(item => [listing.level, listing.role, ...listing.tools, ...listing.languages].includes(item))));
            return;
        }

        setFilteredListings(jobListings);
    }

    return (
        <main className="App">
            <header>
                {filters.length ?
                    <JobFilter filters={filters} clearFilters={clearFilters} removeFilter={removeFilter}/> : null}
            </header>

            <div className={'listings-wrapper'}>
                {filteredListings.map(listing => {
                    return <JobListing handleAddFilter={handleAddFilter} listing={listing} key={listing.id}/>
                })}
            </div>
        </main>
    )
}

export default App
