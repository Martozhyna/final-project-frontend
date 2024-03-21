import css from './Loader.module.css';

const Loader = () => {
    return (
        <>
                    <div className={css.cell}>
                        <div className={css.card}>
                            <span className={css.flowerLoader}>Loading…</span>
                            <span className={css.flowerLoader}>Loading…</span>
                            <span className={css.flowerLoader}>Loading…</span>
                        </div>
                    </div>
        </>
    )
}
export {Loader}