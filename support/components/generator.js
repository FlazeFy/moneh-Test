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

export const  generateAuthToken= (type) => {
    let res = ""

    if(type == "hardcode"){
        // username : testeruser
        // password : test123
        // Signed in at 13/3/25 14:48 WIB
        res = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjY3OTA4MTc1MjAsImxldmVsIjoiYXBwbGljYXRpb24iLCJ1c2VybmFtZSI6InRlc3RlcnVzZXIifQ.S-wyBOpn6FNcr9UW0-SyAdBhYORfzBNe9IPLoLclarU"
    } 

    return res
}
