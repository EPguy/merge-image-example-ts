import getType from "./getType";
import priority from "../constants/priority";
export default function sortPriority(imageList: string[]) : string[] {
    return imageList.sort((c,n) => {
        const currentIamgeType = getType(c);
        const nextIamgeType = getType(n);
        return priority.indexOf(nextIamgeType) - priority.indexOf(currentIamgeType)
    })
}   