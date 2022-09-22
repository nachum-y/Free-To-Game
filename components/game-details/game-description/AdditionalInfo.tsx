import { FC } from 'react'
import classes from './AdditionalInfo.module.scss'

const AdditionalInfo: FC<{ title: string, developer: string, publisher: string, release_date: string, genre: string, platform: string }> = ({ title, developer, publisher, release_date, genre, platform }) => {
    return (

        <div className={classes['additional-info']}>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Title
                </span>
                <span className={classes['']}>
                    {title}
                </span>
            </div>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Developer
                </span>
                <span className={classes['']}>
                    {developer}
                </span>
            </div>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Publisher
                </span>
                <span className={classes['']}>
                    {publisher}
                </span>
            </div>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Release Date
                </span>
                <span className={classes['']}>
                    {release_date}
                </span>
            </div>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Genre
                </span>
                <span className={classes['']}>
                    {genre}
                </span>
            </div>
            <div className={classes['info']}>
                <span className={classes['text-muted']}>
                    Platform
                </span>
                <span className={classes['']}>
                    {platform}
                </span>
            </div>
        </div>
    )
}

export default AdditionalInfo