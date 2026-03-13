const projects = [
 {name:"EigenLayer",type:"Restaking protocol"},
 {name:"Celestia",type:"Modular blockchain"},
 {name:"Berachain",type:"DeFi ecosystem"},
 {name:"Fuel Network",type:"Optimistic rollup"},
 {name:"Monad",type:"High performance L1"}
];

const container = document.getElementById("projects");

projects.forEach(p=>{
 let div = document.createElement("div");
 div.innerText = p.name + " - " + p.type;
 container.appendChild(div);
});
console.log("DropTrack dashboard loaded");
