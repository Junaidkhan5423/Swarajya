export function convertIntoBase64(file){
return new Promise(function(resolve,reject)
{
//  const fileReader = new FileReader();
//  fileReader.readAsDataURL(file);
//  fileReader.onload =()=>{
//     resolve(fileReader.result)
//  }
//  fileReader.onerror =(err)=>{
//     reject(err)
//  }

const data = new FormData()
data.append("file", file)
data.append("upload_preset", "fqlwi7we")
data.append("cloud_name","dqijtuy3u")
fetch("https://api.cloudinary.com/v1_1/dqijtuy3u/image/upload",{
method:"post",
body: data
})
.then(resp => resp.json())
.then(data => {
   console.log(data?.secure_url);
   resolve(data?.secure_url)
})
.catch(err =>  reject(err))
})
}
