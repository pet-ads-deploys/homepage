import "./ProcessoSeletivo.css";
import Cabecalho from "./SubComponentes/Cabecalho/Cabecalho";
import Requisitos from "./SubComponentes/Requisitos/Requisitos";
import Inscricoes from "./SubComponentes/Inscricoes/Inscricoes";
import MenuNavegacao from "../../components/menus/MenuNavegacao/menuNavegacao";

function ProcessoSeletivo() {
  return (
    <>
      <MenuNavegacao />

      <div className="corpo">
        <Cabecalho
          titulo="Processo Seletivo"
          texto="Todos os estudantes regularmente matriculados no curso de Tecnologia em Análise e 
                    Desenvolvimento de Sistemas do IFSP Câmpus São Carlos podem participar dos processos seletivos do PET/ADS. 
                    O grupo é composto por até doze bolsistas e até seis voluntários.  Os processos seletivos são regidos por 
                    editais publicados periodicamente."
        />

        <section className="corpo_informacoes">
          <Requisitos
            titulo="Requisitos"
            texto="Para se inscrever no processo seletivo, o candidato deverá:"
            item_1="Estar regularmente matriculado no curso de Análise e Desenvolvimento de Sistemas."
            item_2="Possuir disponibilidade para se dedicar 20 horas semanais ao PET/ADS."
          />

          <Inscricoes
            titulo="Inscrições"
            texto_1="As inscrições devem ser realizadas pelo formulário indicado no edital."
            email=""
            texto_2="Prazo de inscrição:"
            data="15 à 20 de fevereiro de 2025"
            estado=""
            texto_3="Detalhes sobre documentos necessários, critérios, cronograma e outras informações devem ser verificadas no edital:"
          />
        </section>
      </div>
    </>
  );
}

export default ProcessoSeletivo;
