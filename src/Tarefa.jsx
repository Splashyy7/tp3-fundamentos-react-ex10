import React from 'react';


const Tarefa = ({ nome, status }) => {
  return (
    <div className="tarefa">
      <h3>{nome}</h3>
      <p>Status: {status}</p>
    </div>
  );
};

export default Tarefa;
