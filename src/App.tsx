import { useEffect, useState, type FormEvent } from "react";
import "./App.css";
import ItemCard from "./components/ItemCard/ItemCard";

function App() {
  const [cloth, setCloth] = useState<string[]>([]);
  const [newCloth, setNewCloth] = useState<string>("");

  useEffect(() => {
    const savedData = localStorage.getItem("data");
    if (savedData) {
      const parsedSavedData = JSON.parse(savedData);
      if (Array.isArray(parsedSavedData) && parsedSavedData.length > 0) {
        setCloth(parsedSavedData);
      }
    } else {
      setCloth(["Куртка", "Кросовки", "Рюкзак"]);
    }
  }, []);

  function addDress(e: FormEvent) {
    e.preventDefault();
    if (newCloth.trim()) {
      setCloth((state) => {
        const newState = [...state, newCloth.trim()];
        localStorage.setItem("data", JSON.stringify(newState));
        return newState;
      });
      setNewCloth("");
    }
  }

  function deleteCloth(cloth: string) {
    setCloth((state) => {
      const newState = state.filter((el) => el !== cloth);
      localStorage.setItem("data", JSON.stringify(newState));
      return newState;
    });
  }

  return (
    <div>
      <form onSubmit={addDress}>
        <label htmlFor="password">Название одежды</label>
        <input
          id="cloth"
          name="cloth"
          type="text"
          placeholder="Введите название одежды"
          value={newCloth}
          onChange={(e) => setNewCloth(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
      <ItemCard cloth={cloth} deleteCloth={deleteCloth} />
    </div>
  );
}

export default App;
