import ago from 's-ago'


const formatRelativeTime = (msTime: number): string => {
    return ago(new Date(msTime), 'hour')
}

export default formatRelativeTime