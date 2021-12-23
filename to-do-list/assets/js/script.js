const input = document.getElementById('input');
const botao = document.getElementById('botao');
const todoList= document.getElementById('lista');

//Função que só chama a função principal passando o parametro como o conteudo no input de text
//Esse input de text será o parametro "tarefa" da nossa função principal
function chama(){
    adicionaTask(input.value);
}

//Função principal que adiciona as tarefa com parametro tarefa(que sera o texto digitado no input do tipo texto).
function adicionaTask(tarefa){
    //Cria uma div para cada tarefa, o que permite uma ficar embaixo da outra.
    const divItem = document.createElement('div');

    //Cria o imput  (a caixinha do lado de cada tarefa)
    const item = document.createElement('input');
    item.setAttribute('type', 'checkbox'); // tipo check box para poder marcar ou desmarcar tarefa.
    item.setAttribute('id',tarefa);  //adiciona um id usando o parametro, p poder vincular ao label

    //cria o label para o input(tarefa adicionada)
    const labelItem = document.createElement('label');
    labelItem.setAttribute('for',tarefa); //vincula ao input d msm id
    labelItem.innerHTML=tarefa; //adiciona o texto da tarefa dentro de <label>

    //Agora só adicionar o input(item) com sua respectiva label(labemItem) dentro de cada div feita paras as tarefas
    divItem.appendChild(item);
    divItem.appendChild(labelItem);

    //E por fim adiciona essa div a nossa lista de tarefas ^^
    todoList.appendChild(divItem);

    //remove a tarefa do input assim que ela for adiciona a lista de tarefas.
    input.value="";
    
}


