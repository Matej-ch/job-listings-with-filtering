import './JobTag.scss'

function JobTag({tag, isFeatured = false}: { tag: string, isFeatured?: Boolean }) {
    return (<span className={isFeatured ? 'feature' : ''}>{tag}</span>);
}

export default JobTag