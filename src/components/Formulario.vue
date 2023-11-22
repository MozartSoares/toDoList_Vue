<template>
    <form @submit.prevent="cadastraTarefa">
        <div class="row">
            <div class="col">
                <input :value="estado.tarefaTemp" @change="evento => estado.tarefaTemp = evento.target.value" required
                    type="text" placeholder="Digite aqui a descrição da tarefa" class="form-control">
            </div>
            <div class="col-md-2">
                <button class="btn btn-primary" type="submit">Cadastrar</button>
            </div>
            <div class="col-md-2">
                <select @change="evento => estado.filtro = evento.target.value" class="form-control">
                    <option value="todas">Todas tarefas</option>
                    <option value="pendentes">Pendentes</option>
                    <option value="finalizadas">Finalizadas</option>
                </select>
            </div>
        </div>
    </form>
</template>