const input = document.getElementById('tarefaInput');
const addBtn = document.getElementById('addBtn');
const lista = document.getElementById('listaTarefas');

addBtn.addEventListener('click', () => {
  const texto = input.ariaValueMax.trim();

  if (texto !== '') {
    const li = document.createElement('li');
    li.textContent = texto;

    // Botão concluir

    li.addEventListener('click', () => {
      li.classList.toggle('completed');
    });

    //Botão excluir

    const btnDel = document.createElement('button');
    btnDel.textContent = 'X';
    btnDel.style.background = 'red';
    btnDel.style.color = 'white';
    btnDel.style.bordern = 'none';
    btnDel.style.borderRadius = '5px';
    btnDel.style.padding = '3px 6px';
    btnDel.style.cursor = 'pointer';
    btnDel.addEventListener('click', e => {
      e.stopPropagation();
      lista.removeChild(li);
    });

    li.appendChild(btnDel);
    lista.appendChild(li);
    input.value = '';
  }
});
