import css from './Comments.module.css';

const Comments = ({comment}) => {
    return (
        <div className={css.comments}>
            <div>
                <p>"{comment.comment && comment.comment}"</p>
            </div>
            <div className={css.comments_info}>
                <p>{comment.created_at && comment.created_at.slice(0,10)}</p>
                <p>{comment.order && comment.order}</p>
            </div>

        </div>

    )
}
export {Comments}