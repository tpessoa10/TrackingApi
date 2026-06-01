import { useContext, useEffect, useState } from 'react'
import api from '../../Services/api'
import styles from './style.module.css'
import type { ClimaInterface } from '../../interfaces/ClimaInterface';
import { arredondarPersonalizado, formatarData, msParaKmh } from '../../utils/utils';
import { SearchContext } from '../../Services/SearchContext';
import type { PrevisaoInterface } from '../../interfaces/PrevisaoInterface';
import { FaArrowUp, FaArrowDown, FaTemperatureHigh, } from "react-icons/fa6";
import { MdWaterDrop } from "react-icons/md";
import { PiWind } from "react-icons/pi";
import { useErrorGlobal } from '../../Services/ErrorContext';




export default function Home() {
  const { cidade } = useContext(SearchContext)
  const [clima, setClima] = useState<ClimaInterface>();
  const [previsao, setPrevisao] = useState<PrevisaoInterface[]>()
  const cidadeFormatada = cidade?.trim()
  const {dispararErro} = useErrorGlobal()

  console.log('cidade é ', cidade)

  useEffect(() => {
    async function buscarClima() {
      try {
        const response = await api.get(cidadeFormatada ? `clima/${cidadeFormatada}` : `clima/teresina`);
        console.log(response)
        setClima(response.data.atual);
        setPrevisao(response.data.previsao)
      } catch (e) {
        dispararErro('Erro ao buscar por cidade')
        console.log(e);
      }
    }

    buscarClima();
  }, [cidade]);

  return (
    <div className={styles.div}>
      <div className={styles.divTemperatura}>
        <div className={styles.DivTitulo}>
          <h3 className={styles.titulo}>Temperatura Atual</h3>
        </div>
        <div className={styles.sla}>
          <div className={styles.infoPrincipal}>
            <section className={styles.loc}>
              <h2 className={styles.cidade}>{clima?.name}</h2>
            </section>
            <section className={styles.tempContainer}>
              {clima?.weather?.[0]?.icon && (
                <img
                  src={`http://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                  alt={`Clima em ${clima?.name}`}
                  className={styles.iconeClima}
                />
              )}
              <span className={styles.numeroTemp}>
                {arredondarPersonalizado(clima?.main?.temp ?? 0)}°
              </span>
            </section>
            <section className={styles.descContainer}>
              <p className={styles.descricao}>{clima?.weather?.[0]?.description}</p>
            </section>
          </div>
          <div className={styles.infoSecundaria}>
            <section className={styles.containerInfo}>
              <div className={styles.linhaInfo}>
                <FaArrowUp className={styles.icone} />
                <span className={styles.legenda}>Max</span>
                <span className={styles.valor}>{arredondarPersonalizado(clima?.main?.temp_max ?? 0)}°</span>
              </div>
              <div className={styles.linhaInfo}>
                <FaArrowDown className={styles.icone} />
                <span className={styles.legenda}>Min</span>
                <span className={styles.valor}>{arredondarPersonalizado(clima?.main?.temp_min ?? 0)}°</span>
              </div>
              <div className={styles.linhaInfo}>
                <MdWaterDrop className={styles.icone} />
                <span className={styles.legenda}>Umidade</span>
                <span className={styles.valor}>{clima?.main?.humidity ?? 0}%</span>
              </div>
              <div className={styles.linhaInfo}>
                <FaTemperatureHigh className={styles.icone} />
                <span className={styles.legenda}>Sensação Térmica</span>
                <span className={styles.valor}>{arredondarPersonalizado(clima?.main?.feels_like ?? 0)}°</span>
              </div>
              <div className={styles.linhaInfo}>
                <PiWind className={styles.icone} />
                <span className={styles.legenda}>Ventos</span>
                <span className={styles.valor}>{msParaKmh(clima?.wind?.speed)} Km/h</span>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className={styles.nsei}>
        <div className={styles.DivTitulo}>
          <h3 className={styles.titulo}>Próximos dias</h3>
        </div>
        <div className={styles.divPrevisao}>
          {previsao?.map((item, index) => (
            <section key={index}>
              <p>{formatarData(item.dt_txt)}</p>
              <img
                src={`http://openweathermap.org/img/wn/${item?.weather?.[0]?.icon}@2x.png`}
                alt="Ícone do clima"
              />
              <p>{item.weather?.[0].description}</p>
              <p><span>{arredondarPersonalizado(item.main.temp_min)}°</span><span>/
              </span><span>{arredondarPersonalizado(item.main.temp_max)}°</span></p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}