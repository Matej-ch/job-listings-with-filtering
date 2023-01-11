import './JobListing.scss'
import JobOffer from "./JobOffer";
import {useState} from "react";
import JobTag from "./JobTag";

function JobListing({
                        listing,
                        handleAddFilter
                    }: { listing: JobOffer, handleAddFilter: (tag: string) => void }) {

    const [icon, setIcon] = useState<string>('');

    import(`./assets/${listing.logo}.svg`).then(image => {
        setIcon(image.default)
    });

    return (<article className={listing.featured ? 'featured' : ''}>
        <img src={icon} alt={'logo of company ' + listing.company}/>

        <div className={'basic-info'}>
            <div className={'company-wrapper'}>
                <h1>{listing.company}</h1>
                <div className={'pills'}>
                    {listing.new ? <JobTag handleAddFilter={handleAddFilter} tag={'New!'}/> : null}
                    {listing.featured ?
                        <JobTag handleAddFilter={handleAddFilter} tag={'featured'} isFeatured={true}/> : null}
                </div>

            </div>
            <div className={'position'}>{listing.position}</div>
            <div className={'list-items'}>
                <span>{listing.postedAt}</span>
                <i className={'bullet'}></i>
                <span>{listing.contract}</span>
                <i className={'bullet'}></i>
                <span>{listing.location}</span>
            </div>
        </div>

        <div className={'tags'}>
            {[listing.role, listing.level, ...listing.tools, ...listing.languages].map((tag, index) => {
                return <JobTag tag={tag} handleAddFilter={handleAddFilter} key={index}/>
            })}
        </div>
    </article>);
}

export default JobListing