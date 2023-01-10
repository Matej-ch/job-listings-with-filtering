import './JobListing.scss'
import JobOffer from "./JobOffer";
import {useState} from "react";
import JobTag from "./JobTag";

function JobListing({listing}: { listing: JobOffer }) {

    const [icon, setIcon] = useState<string>('');

    import(`./assets/${listing.logo}.svg`).then(image => {
        setIcon(image.default)
    });

    return (<article>
        <img src={icon} alt={'logo of company ' + listing.company}/>

        <div className={'basic-info'}>
            <h1>{listing.company}</h1>
            <div className={'pills'}>

                {listing.new ? <JobTag tag={'New!'}/> : null}
                {listing.featured ? <JobTag tag={'featured'}/> : null}
            </div>
            <div className={'position'}>{listing.position}</div>
            <div>
                <span className={'list-item'}>{listing.postedAt}</span>
                <span className={'list-item'}>{listing.contract}</span>
                <span className={'list-item'}>{listing.location}</span>
            </div>
        </div>

        <div className={'tags'}>
            {[listing.role, listing.position, ...listing.tools, ...listing.languages].map(tag => {
                return <JobTag tag={tag}/>
            })}
        </div>
    </article>);
}

export default JobListing