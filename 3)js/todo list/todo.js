let todos=["Collect Chicken Eggs","Clean Litter box"];
let promptMessage="What would you like to do?";
while(true){
    let userInput=prompt(promptMessage).trim().toLowerCase();
    promptMessage="What would you like to do?";
    if(userInput=="quit"){
        console.log("OK QUIT THE APP!");
        break;
    }
    else if(userInput=="new"){
        let task=prompt("Ok,what is the new to do?").trim();
        todos.push(task);
        console.log(`${task} added to the list!`)
    }
    else if(userInput=="list"){
        console.log("********************************")
        for(let i=0;i<todos.length;i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********************************")
    }
    else if(userInput=="delete"){
        let index=parseInt(prompt("Ok,enter an index to delete:"));
        if((index!=0 && !index) || index<0 || index>=todos.length ){
            promptMessage="Invalid index!!What would you like to do?";
            continue;
        }
        console.log(`Ok,deleted ${todos[index]}`)
        todos.splice(index,1);
    }
}