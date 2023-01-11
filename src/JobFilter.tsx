import "./JobFilter.scss"

function JobFilter({
                       filters,
                       clearFilters,
                       removeFilter
                   }: { filters: Array<string>, clearFilters: () => void, removeFilter: (tag: string) => void }) {
    return (<div className={'job-filter'}>
        <div>
            {filters.map((filter, index) => {
                return <span key={index} className={'removable-tag'}>
                    <span className={'name'}>{filter}</span>
                    <span className={'remove'} onClick={() => removeFilter(filter)}></span>
                </span>
            })}
        </div>

        <a href="#" className={'clear'} onClick={clearFilters}>Clear</a>

    </div>);
}

export default JobFilter;