export const  generateRandDctType = () => {
    let seed = [
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
    let res = Math.random() < 0.5

    return res
}