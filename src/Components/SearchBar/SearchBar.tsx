import {  useContext, useState } from "react"
import { SearchContext } from "../../Services/SearchContext"
import styles from './styles.module.css'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function SearchBar() {
  const { setCidade } = useContext(SearchContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // evita reload
    if (!input.trim()) return;
    setCidade(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar por cidade"
      />
      <button className={styles.button} type="submit"><FaMagnifyingGlass/></button>
    </form>
  );
}