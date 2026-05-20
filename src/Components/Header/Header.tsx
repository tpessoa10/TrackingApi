import SearchBar from "../SearchBar/SearchBar";
import styles from './style.module.css'

export default function Header() {
    return (
        <div className={styles.div}>
            <div className={styles.centro}>
                <a href="" className={styles.a}>
                    <h2>TrackingWeather</h2>
                </a>
                <SearchBar />
            </div>
        </div>
    )
}