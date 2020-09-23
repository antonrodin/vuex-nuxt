// Este sera nuestro almacenamiento central
export const state = () => ({
    _counter: 0
});

// Accesores o getters
// Normalmente se llaman desde las propiedas computed de los componentes
export const getters = {
    getCounter(state) {
        return state._counter
    }
}

// Acciones
// Estas funciones o metodos sirven para llamar a las mutaciones
// A diferencia de las mutaciones pueden ser asincornas (llamadas a las APIs)
// Pueden contener algo de logica de negocio y ademas pueden llamar a varias mutaciones
export const actions = {
    sumarDos({ commit }) {
        commit('increment');
        commit('increment');
    }
}

// Mutadores
// El unico fin de los mutadores es mutar o modificar el state o almacenamiento
export const mutations = {
    increment(state) {
        state._counter++;
    }
}