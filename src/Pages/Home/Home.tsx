import { useContext, useEffect, useState } from 'react'
import api from '../../Services/api'
import styles from './style.module.css'
import type { ClimaInterface } from '../../interfaces/ClimaInterface';
import { arredondarPersonalizado, msParaKmh } from '../../utils/utils';
import { SearchContext } from '../../Services/SearchContext';
import type { PrevisaoInterface } from '../../interfaces/PrevisaoInterface';

export default function Home() {
  const { cidade } = useContext(SearchContext)
  const [clima, setClima] = useState<ClimaInterface>();
  const [previsao, setPrevisao] = useState<PrevisaoInterface[]>()
  const cidadeFormatada = cidade?.trim()

  console.log('cidade é ', cidade)

  useEffect(() => {
    async function buscarClima() {
      try {
        const response = await api.get(cidadeFormatada ? `clima/${cidadeFormatada}` : `clima/teresina`);
        console.log(response)
        setClima(response.data.atual);
        setPrevisao(response.data.previsao)
      } catch (e) {
        console.log(e);
      }
    }

    buscarClima();
  }, [cidade]);

  return (
    <div className={styles.div}>
      <div className={styles.divTemperatura}>
        <div className={styles.infoPrincipal}>
          <section className={styles.loc}>
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
        </div>
        <div className={styles.infoSecundaria}>
          <section>
            <p className={styles.humidity}>Humidade: <span>{clima?.main.humidity}</span>%</p>
            <p className={styles.humidity}>Sensação Térmica: {clima?.main.temp !== undefined && (<span>{arredondarPersonalizado(clima.main.temp)}°</span>)}</p>
            <p className={styles.humidity}>Ventos: {msParaKmh(clima?.wind.speed)} Km/h</p>
          </section>
        </div>
      </div>
      <div className={styles.divPrevisao}>
        {previsao?.map((item, index) => (
          <section key={index}>
            <p>{item.dt_txt}</p>
            <p>{item.main.temp}</p>
            <p><span>{arredondarPersonalizado(item.main.temp_min)}°</span><span>{arredondarPersonalizado(item.main.temp_max)}°</span></p>
          </section>
        ))}
      </div>
    </div>
  );
}