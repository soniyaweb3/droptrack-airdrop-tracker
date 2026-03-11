const projects = [
 {name:"Aztec",type:"ZK testnet"},
 {name:"Gensyn",type:"AI compute"},
 {name:"Movement",type:"Move ecosystem"}
];

const container = document.getElementById("projects");

projects.forEach(p=>{
 let div = document.createElement("div");
 div.innerText = p.name + " - " + p.type;
 container.appendChild(div);
});
