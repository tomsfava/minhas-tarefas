import { useSelector } from 'react-redux'

import Tarefa from '../../components/tarefa'
import { Container, Mensagem } from '../../styles'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraTarefas = () => {
    let tarefasFiltradas = itens
    if (termo) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.titulo.toLowerCase().search(termo.toLowerCase()) >= 0
      )
    }
    if (criterio === 'prioridade') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.prioridade === valor
      )
    }
    if (criterio === 'status') {
      tarefasFiltradas = tarefasFiltradas.filter(
        (item) => item.status === valor
      )
    }
    return tarefasFiltradas
  }

  const exibeValoresFiltro = (quantidade: number) => {
    let mensagem = ''
    const ternarioTermo =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${ternarioTermo}`
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: ${`${criterio}=${valor}`}  ${ternarioTermo} `
    }
    return mensagem
  }

  const tarefas = filtraTarefas()
  const mensagem = exibeValoresFiltro(tarefas.length)

  return (
    <Container>
      <Mensagem>{mensagem}</Mensagem>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default ListaDeTarefas
