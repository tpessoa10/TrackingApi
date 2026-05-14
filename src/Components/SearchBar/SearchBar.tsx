import {  useContext, useState } from "react"
import { SearchContext } from "../../Services/SearchContext"


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
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Buscar por cidade"
      />
      <button type="submit">Buscar</button>
    </form>
  );
}