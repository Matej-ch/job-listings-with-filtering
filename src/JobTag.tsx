import './JobTag.scss'

function JobTag({
                    tag,
                    isFeatured = false,
                    handleAddFilter
                }: { tag: string, isFeatured?: Boolean, handleAddFilter: (tag: string) => void }) {
    return (<span className={isFeatured ? 'feature' : ''} onClick={() => handleAddFilter(tag)}>{tag}</span>);
}

export default JobTag