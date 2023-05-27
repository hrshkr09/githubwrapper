const userNameInput = document.getElementById("userName");
const showDetailsButton = document.getElementById("showDetails");
const profileInfoDiv = document.getElementById("profileInfo");
const repoInfoDiv=document.getElementById('reposInfo');

//using async await

showDetailsButton.addEventListener("click",async () => {
    const userName = userNameInput.value;
    //request the data from github server: fetch api
    // Here json() is also returning promise
    const res=await fetch(`https:api.github.com/users/${userName}`);
    const data=await res.json();
    showProfile(data);
    showReposInfo(userName);
     
  });

  function showProfile(data){
        profileInfoDiv.innerHTML = `
              <div class="card">
                  <div class="card-imag">
                      <img src=${data.avatar_url} alt="${data.name}">
                  </div>
                  <div class="card-body">
                      <div class="card-title">${data.name}</div>
                      <div class="card-subheading">${data.login}</div>
                      <div class="card-text">
                          <p>${data.bio}</p>
                          <p>${data.followers} followers ${data.following} following</P>
                          <button>
                          <a href=${data.html_url}>
                          Do Checkout Profile
                          </a>
                       </button>
                  
                      </div>
                  
                  </div>
              </div>
          `;
      
      
  }
 async function showReposInfo(userName){
        const res=await fetch(`https://api.github.com/users/${userName}/repos`)
        const projects=await res.json();
         
             console.log(projects);
             for(let i=0;i<projects.length;i++){
                 repoInfoDiv.innerHTML+=`
                 <div class="card">
              
                 <div class="card-body">
                     <div class="card-title">${projects[i].name}</div>
                     <div class="card-subheading">${projects[i].language}</div>
                     <div class="card-text">
                      
                         <button>
                             <a href=${projects[i].html_url}>
                             Do Checkout Project
                             </a>
                          </button>
                       
    
    
            
                     </div>
                
                 </div>
             </div>
             `
             }
           
         
     }
  //usimng then and catch
// function showReposInfo(userName){
//     fetch(`https://api.github.com/users/${userName}/repos`)
//     .then((res)=>res.json())
//     .then((projects)=>{
//         console.log(projects);
//         for(let i=0;i<projects.length;i++){
//             repoInfoDiv.innerHTML+=`
//             <div class="card">
          
//             <div class="card-body">
//                 <div class="card-title">${projects[i].name}</div>
//                 <div class="card-subheading">${projects[i].language}</div>
//                 <div class="card-text">
                  
//                     <button>
//                         <a href=${projects[i].html_url}>
//                         Do Checkout Project
//                         </a>
//                      </button>
                   


        
//                 </div>
            
//             </div>
//         </div>
//             `
//         }
       
//     })
// }
// showDetailsButton.addEventListener("click", () => {
//   const userName = userNameInput.value;
//   //request the data from github server: fetch api
//   // Here json() is also returning promise
//   fetch(`https:api.github.com/users/${userName}`)
//     .then((res) => res.json())
//     .then((data) => {
//       profileInfoDiv.innerHTML = `
//             <div class="card">
//                 <div class="card-imag">
//                     <img src=${data.avatar_url} alt="${data.name}">
//                 </div>
//                 <div class="card-body">
//                     <div class="card-title">${data.name}</div>
//                     <div class="card-subheading">${data.login}</div>
//                     <div class="card-text">
//                         <p>${data.bio}</p>
//                         <p>${data.followers} followers ${data.following} following</P>
//                         <button>
//                         <a href=${data.html_url}>
//                         Do Checkout Profile
//                         </a>
//                      </button>
                
//                     </div>
                
//                 </div>
//             </div>
//         `;
//         showReposInfo(userName);
//     });
// });
