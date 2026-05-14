import { useContext, useEffect, useState } from 'react'
import api from '../../Services/api'
import styles from './style.module.css'
import type { ClimaInterface } from '../../interfaces/ClimaInterface';
import { arredondarPersonalizado } from '../../utils/utils';
import { FaLocationDot } from 'react-icons/fa6'
import { SearchContext } from '../../Services/SearchContext';


export default function Home() {
  const { cidade } = useContext(SearchContext)
  const [clima, setClima] = useState<ClimaInterface>();
  const cidadeFormatada = cidade?.trim()
  
  console.log('cidade é ', cidade)

  useEffect(() => {
    async function buscarClima() {
      try {
        const response = await api.get(cidadeFormatada ? `clima/${cidadeFormatada}` : `clima/teresina`);
        console.log(response)
        setClima(response.data);
      } catch (e) {
        console.log(e);
      }
    }

    buscarClima();
  }, [cidade]);

  return (
    <div className={styles.div}>
      <div>
        <section className={styles.loc}>
          <FaLocationDot />
          <span>{clima?.name}</span>
        </section>
        <section className={styles.temp}>
          <p className={styles.temp}>{clima?.main.temp !== undefined && (<span>{arredondarPersonalizado(clima.main.temp)}°</span>)}</p>
          <img src={`http://openweathermap.org/img/wn/${clima?.weather[0].icon}@2x.png`} alt="Clima" />
        </section>
        <section>
          {clima?.weather.map((item, index) => (
            <p key={index} className={styles.desc}>{item.description}</p>
          ))}
        </section>
        <section className={styles.segundaSection}>
          <p className={styles.humidity}>Humidade: <span>{clima?.main.humidity}</span>%</p>
          <p className={styles.humidity}>Sensação Térmica: {clima?.main.temp !== undefined && (<span>{arredondarPersonalizado(clima.main.temp)}°</span>)}</p>
        </section>
      </div>
    </div>
  );
}