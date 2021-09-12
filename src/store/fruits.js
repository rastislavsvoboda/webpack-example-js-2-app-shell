// store/fruits.js

export const state = () => ({
    fruits: [
        {
            id:1,
            type:'Orange',
            name:'pomaranc'
        }
    ],
})

export const mutations = {
    addFruit(state, fruit) {
        state.fruits.push(fruit)
    },
    removeFruit(state, fruitId) {
        state.fruits = state.fruits.filter((fruit) => fruit.id !== fruitId)
    },
}

export const actions = {
    addFruit(context, fruit) {
        // const slicedFruit = sliceFruit(fruit)
        context.commit(fruit)
    },
}

export const getters = {
    getApples: (state) => {
        return state.fruits.filter((fruit) => fruit.type === 'Apple')
    },
}