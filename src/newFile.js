import { reactive } from 'vue';
import Cabecalho from './components/cabecalho.vue';
import Formulario from './components/Formulario.vue';
import ListaDeTarefas from './components/listaDeTarefas.vue';

export default (() => {
const __VLS_setup = async () => {
const estado = reactive({
tarefaTemp: '',
filtro: 'todas',
tarefas: [
{
titulo: "Estudar ES6",
finalizada: false
},
{
titulo: "Estudar SASS",
finalizada: false
},
{
titulo: "ir para a academia",
finalizada: true,
},
]
});

const getTarefasPendentes = () => {
return estado.tarefas.filter(tarefa => !tarefa.finalizada);
};

const getTarefasFinalizadas = () => {
return estado.tarefas.filter(tarefa => tarefa.finalizada);
};

const getTarefasFiltradas = () => {
const { filtro } = estado;

switch (filtro) {
case 'pendentes':
return getTarefasPendentes();
case 'finalizadas':
return getTarefasFinalizadas();
default:
return estado.tarefas;
}
};

const cadastraTarefa = () => {
const tarefaNova = {
titulo: estado.tarefaTemp,
finalizada: false
};
estado.tarefas.push(tarefaNova);
estado.tarefaTemp = '';
};
const __VLS_publicComponent = (await import('vue')).defineComponent({
setup() {
return {};
},
});

const __VLS_componentsOption = {};

let __VLS_name!: 'App';
function __VLS_template() {
let __VLS_ctx!: InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>> & InstanceType<import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
/* Components */
let __VLS_localComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C; } ? C : {}> & typeof __VLS_componentsOption & typeof __VLS_ctx;
let __VLS_otherComponents!: typeof __VLS_localComponents & import('./__VLS_types.js').GlobalComponents;
let __VLS_own!: import('./__VLS_types.js').SelfComponent<typeof __VLS_name, typeof __VLS_internalComponent & typeof __VLS_publicComponent & (new () => { $slots: typeof __VLS_slots; }) >;
let __VLS_components!: typeof __VLS_otherComponents & Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
/* Style Scoped */
type __VLS_StyleScopedClasses = {} &
{ 'done'?: boolean; };
let __VLS_styleScopedClasses!: __VLS_StyleScopedClasses | keyof __VLS_StyleScopedClasses | (keyof __VLS_StyleScopedClasses)[];
/* CSS variable injection */
/* CSS variable injection end */
let __VLS_templateComponents!: {} &
import('./__VLS_types.js').WithComponent<'Cabecalho', typeof __VLS_components, 'Cabecalho'> &
import('./__VLS_types.js').WithComponent<'Formulario', typeof __VLS_components, 'Formulario'> &
import('./__VLS_types.js').WithComponent<'ListaDeTarefas', typeof __VLS_components, 'ListaDeTarefas'>;
__VLS_components.Cabecalho;
// @ts-ignore
[Cabecalho,];
__VLS_components.Formulario;
// @ts-ignore
[Formulario,];
__VLS_components.ListaDeTarefas;
// @ts-ignore
[ListaDeTarefas,];
{
({} as JSX.IntrinsicElements).div;
({} as JSX.IntrinsicElements).div;
(__VLS_x as JSX.IntrinsicElements)['div'] = { class: ("container"), };
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Cabecalho>) = { tarefasPendentes: ("10"), };
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.Formulario>) = {};
}
{
(__VLS_x as import('./__VLS_types.js').ComponentProps<typeof __VLS_templateComponents.ListaDeTarefas>) = {};
}
}
if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
__VLS_styleScopedClasses['container'];
}
declare var __VLS_slots: {};
return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
setup() {
return {
Cabecalho: Cabecalho,
Formulario: Formulario,
ListaDeTarefas: ListaDeTarefas,
};
},
});
return {} as typeof __VLS_publicComponent;
};
return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never;
})({} as any);
