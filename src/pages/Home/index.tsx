import BotaoAdicionar from '../../components/botaoAdicionar'
import BarraLateral from '../../containers/barraLateral'
import ListaDeTarefas from '../../containers/listaDeTarefas'

const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
