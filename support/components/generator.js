export const  generateRandDctType = () => {
    const seed = [
        'flows_category',
        'pockets_type',
        'wishlists_type',
        'flows_category'
    ]

    let idx = Math.floor(Math.random() * seed.length)
    let res = seed[idx]

    return res
}

export const  generateRandBool= () => {
    const res = Math.random() < 0.5

    return res
}

export const  generateRandNumber= (max, min) => {
    const res = Math.floor(Math.random() * max) + min

    return res
}