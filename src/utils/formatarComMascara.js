export const formatarComMascara = (value, mask) => {
   if (!value) return "";
   let numericValue = value.replace(/[\D]/g, "");
   let maskedValue = "";
   let valueIndex = 0;
   for (let i = 0; i < mask.length; i++) {
       if (mask[i] === "#") {
           maskedValue += numericValue[valueIndex] || "";
           valueIndex++;
       } else {
           maskedValue += mask[i];
       }
       if (valueIndex >= numericValue.length) break;
   }
   return maskedValue;
};

export const MASCARA_TELEFONE = "(##) #####-####";
export const MASCARA_CPF= "###.###.###-##";

/* a mascara é uma padronização para ajudar a escrever as informações da forma correta no input. a mascara ajuda dizendo como tem que ser escrita a informação. */