export default function compareString(list: string[], text: string) {
    let filtered = list.filter(value => {
        return value.includes(text);
    })
    if(filtered.length > 0) return true;
    else return false;
}