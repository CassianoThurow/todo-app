'use client'

import { useState } from 'react';
import { Tarefa } from '../factories';

export const useTarefas = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  const adicionarTarefa = (descricao: string, categoria: string) => {
    const novaTarefa: Tarefa = {
      id: Date.now(),
      descricao,
      categoria,
      concluida: false,
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const concluirTarefa = (id: number) => {
    setTarefas(
      tarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, concluida: true } : tarefa
      )
    );
  };

  return {
    tarefas,
    adicionarTarefa,
    concluirTarefa,
  };
};
