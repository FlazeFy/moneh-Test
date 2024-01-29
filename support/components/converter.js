export const  getSlug= (name) => {
    let res = name.replace(/ /g, '_')
    res = res.replace(/-/g, '_');
    res = res.replace(/[!:\\\[/"\;\.\'^£$%&*()}{@#~?><>,|=+¬\]]/g, '')

    return res
}