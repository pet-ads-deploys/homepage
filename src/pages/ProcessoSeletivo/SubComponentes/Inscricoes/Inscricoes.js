import { AiOutlineCloudDownload } from "react-icons/ai";
import styles from "./Inscricoes.module.css";
import useFetchProcessos from "../../../../hooks/fetch/useFetchProcessos";

function Inscricoes() {
  const { inscricao } = useFetchProcessos();
  return (
    <div className={styles.Inscricao}>
      <h2 className={styles.titulo}>Inscrições</h2>
      <p className={styles.texto}>
        {inscricao.introducao}
        {/* <a className={styles.email} href="mailto:pet.ads.scl@ifsp.edu.br?subject=Processo seletivo PET/ADS">
          {email}
        </a> */}
      </p>

      {}
      {inscricao.estado &&
      inscricao.estado.trim().toLowerCase() === "encerrado" ? (
        <p className={styles.texto}>
          {inscricao.prazo}{" "}
          <span className={styles.encerrado}>{inscricao.data}</span> (
          {inscricao.estado})
        </p>
      ) : (
        <p className={styles.texto}>
          {inscricao.prazo}{" "}
          <span className={styles.ativo}>{inscricao.data}</span> (
          {inscricao.estado})
        </p>
      )}
      <p className={styles.texto}>{inscricao.detalhes} </p>
      <a href={inscricao.drive} rel="noreferrer" target="_blank" className={styles.download}>
        <AiOutlineCloudDownload className={styles.btnDownload} />
      </a>
      </div>
  );
}
export default Inscricoes;
