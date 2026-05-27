export function sliceText (text:string,maxIndex:number) {
        return text.length > maxIndex ? text.slice(0,maxIndex)+'...' : text

    }