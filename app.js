let wait = document.getElementById('wait')
let dots = [".",".","."]

function animation(){
    wait.innerHTML = "wait"
    
    dots.forEach((index,i)=>{
        setTimeout(()=>{
            wait.innerText += index
        },i*300)
    })
    
}
animation()
setInterval(animation,dots.length*300)
let contentArray = ["Initializing Hacking","Reading your Files","Password files Detected","sending all passwords and personal files to server","Cleaning up","Done!"]


let idS = ["init","read","password","send","clean","done"]

async function displayingInSeq() {
    let div = document.getElementById('div')
    for(let i=0;i<contentArray.length;i++){

            let createElement = document.createElement('p')
            createElement.setAttribute('id',idS[i])
            createElement.setAttribute('class',"text-[#0f0] pt-10 ps-5")
            createElement.innerHTML = contentArray[i];
            div.appendChild(createElement);
            if(createElement.innerHTML=="Done!"){
                createElement.innerHTML = "Done!"
                
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your Data has been uploaded to Dark Web, Congrats!!💀",
                    showConfirmButton: false,
                    timer: 5000
                  });
                }
                else{
                    function animation(){
                        createElement.innerHTML = contentArray[i]
                        dots.forEach((index,i)=>{
                            setTimeout(()=>{
                                createElement.innerText += index
                                }
                            ,i*400)
                        })
                }
               
            
            animation()
            setInterval(animation,dots.length*300)

            // console.log(createElement)
  
            // console.log(div.innerHTML)

            await new Promise((resolve)=>{
                setTimeout(() => {
                 resolve()
                }, Math.floor(Math.random() * 8) * 1000);
                 })
        }
        }
    }
        
    setTimeout(()=>{
        displayingInSeq();
    },2000)
 


    

        



