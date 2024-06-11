document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photos img');
    const textItems = document.querySelectorAll('.texts .text-item');

    // Ação 1: Clique na imagem para mudar o texto
    photos.forEach(photo => {
        photo.addEventListener('click', () => {
            alert('Imagem clicada!');
        });
    });

    // Ação 2: Passe o mouse sobre o texto para alterar o estilo
    textItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = '#ddd';
        });

        item.addEventListener('mouseout', () => {
            item.style.backgroundColor = '#f4f4f4';
        });
    });

    // Ação 3: Clique no texto para adicionar novo conteúdo
    textItems.forEach(item => {
        item.addEventListener('click', () => {
            const newItem = document.createElement('div');
            newItem.classList.add('text-item');
            newItem.textContent = 'Novo Texto';
            document.querySelector('.texts').appendChild(newItem);

            // Adicionar os mesmos eventos ao novo item
            newItem.addEventListener('mouseover', () => {
                newItem.style.backgroundColor = '#ddd';
            });

            newItem.addEventListener('mouseout', () => {
                newItem.style.backgroundColor = '#f4f4f4';
            });

            newItem.addEventListener('click', () => {
                const newItemInner = document.createElement('div');
                newItemInner.classList.add('text-item');
                newItemInner.textContent = 'Novo Texto';
                document.querySelector('.texts').appendChild(newItemInner);
            });
        });
    });
});