import style from "./components/Boutique/Boutique.module.css";
import Boutique from "./components/Boutique/Boutique";

export default function Home() {
  return (
    <div className={style.container}>
      <Boutique />
    </div>
  );
}
