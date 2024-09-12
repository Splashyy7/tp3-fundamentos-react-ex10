import React from 'react';
import Tarefa from './Tarefa';

const tarefas = [
  { nome: 'Tarefa1', status: 'Em andamento' },
  { nome: 'Tarefa2', status: 'Concluído' },
  { nome: 'Tarefa3', status: 'Pendente' },
];

const ListaDeTarefas = () => {
  return (
    <div className="lista-de-tarefas">
      <h1>Lista de Tarefas</h1>
      {tarefas.map((tarefa, index) => (
        <Tarefa key={index} nome={tarefa.nome} status={tarefa.status} />
      ))}
    </div>
  );
};

export default ListaDeTarefas;
