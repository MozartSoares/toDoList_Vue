<template>
    <ul class="list-group mt-4">
            <li class="list-group-item" v-for="tarefa in getTarefasFiltradas()">
                <input @change="evento => tarefa.finalizada = evento.target.checked" :checked="tarefa.finalizada"
                    :id="tarefa.titulo" type="checkbox">
                <label :class="{ done: tarefa.finalizada }" class="ms-3" :for="tarefa.titulo">
                    {{ tarefa.titulo }}
                </label>w
            </li>
        </ul>
</template>