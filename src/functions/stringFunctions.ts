
export const getStringPart = (content: string, wordNumber:number) : string => {
     let returnString = "";
     let stringArr = content.split(". ");
     if(wordNumber > stringArr.length ){
          return stringArr.join(". ");
     }else {
          returnString = stringArr.slice(0, wordNumber).join(". ") + "...";
     }
     return returnString;
} 