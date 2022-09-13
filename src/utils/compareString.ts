export default function compareString(list: string[], text: string) {
    let filtered = list.filter(value => {
        return value.includes(text);
    })
    //console.log(list, text, filtered)
    if(filtered.length > 0) return true;
    else return false;
}