export function convertIntoBase64(file){
return new Promise(function(resolve,reject)
{
 const fileReader = new FileReader();
 fileReader.readAsDataURL(file);
 fileReader.onload =()=>{
    resolve(fileReader.result)
 }
 fileReader.onerror =(err)=>{
    reject(err)
 }
})
}