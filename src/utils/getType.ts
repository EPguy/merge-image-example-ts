import { BodyType, EyesType, MouthType  } from '../constants/types';
import compareString from './compareString';
export default function getType(image : string){
    const str = image.split('/')
    const fileName = str[str.length - 1]
    if(compareString(BodyType, fileName)) return BodyType
    else if(compareString(EyesType, fileName)) return EyesType
    else if (compareString(MouthType, fileName)) return MouthType
    else return MouthType
}