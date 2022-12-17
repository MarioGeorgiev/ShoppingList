function addItem() {


    let item = document.getElementById('newItemText')
    let element = createElementWithTextContent('li', item.value)

    let deleteBtn = createElementWithTextContent('a', '[Премахни]')
    deleteBtn.href = '#';
    element.appendChild(deleteBtn);



    deleteBtn.addEventListener('click', (ev) => {

        ev.target.parentNode.remove();
    });



    document.getElementById('items').appendChild(element);

    item.value = '';
    function createElementWithTextContent(type, content) {
        let element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}