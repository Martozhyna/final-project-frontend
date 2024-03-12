import css from './Headline.module.css';

const Headline = () => {
    return (
        <div className={css.main}>
            <div>
                <img className={css.img} src='https://i.pinimg.com/564x/76/88/f5/7688f5198092cf5347c6453ed145a3e1.jpg' alt="logo"/>
            </div>
            <div className={css.btnContainer}>
                <button className={css.btn}>Admin</button>
                <button className={css.btn}>Exit</button>
            </div>
        </div>
    )
}
export {Headline}