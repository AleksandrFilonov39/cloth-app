import styles from "./ItemCard.module.css";
import type { ItemCardProps } from "./ItemCard.props";

function ItemCard({ cloth, deleteCloth }: ItemCardProps) {
  console.log(cloth);

  return (
    <div className={styles["card"]}>
      {cloth.map((el) => (
        <div key={el}>
          <h2>{el}</h2>
          <button onClick={() => deleteCloth(el)}>Удалить</button>
        </div>
      ))}
    </div>
  );
}

export default ItemCard;
