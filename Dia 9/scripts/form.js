const form = document.querySelector('.formulario-contenedor');
const imageUrl = document.getElementById('imagenUrl');
const titleInput = document.getElementById('titulo');
const titleCount = document.getElementById('titleCount');
const descriptionInput = document.getElementById('despcripcion');
const descriptionCount = document.getElementById('descriptionCount');
const categorySelect = document.getElementById('categoria');
const dateInput = document.getElementById('date');


function crearArticulo(formData) {
    return {
        id: Date.now(),
        imagenUrl: formData.imagenUrl,
        titulo: formData.titulo,
        despcripcion: formData.despcripcion,
        categoria: formData.categoria,
        date: formData.date,
        formattedDate: formatDate(formData.date)
    };
}

function guardarArticulo(article) {
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.unshift(article);
    localStorage.setItem('articles', JSON.stringify(articles));
    return article;
}

function formatDate(iso) {
    if (!iso) return '';
    try {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (e) {
        return iso;
    }
}


function createCardElement(article) {
    const link = document.createElement('a');
    link.className = 'card-link';
    link.href = 'index.html';

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.className = 'card-imagen';
    img.src = article.imagenUrl;
    img.alt = article.titulo || 'Imagen artículo';

    const content = document.createElement('div');
    content.className = 'card-content';

    const h3 = document.createElement('h3');
    h3.textContent = article.titulo || '';

    const p = document.createElement('p');
    p.textContent = article.despcripcion || '';

    const meta = document.createElement('div');
    meta.className = 'card-meta';
    meta.textContent = (article.formattedDate || article.date || '') + ' • ' + (article.categoria || '');

    content.appendChild(h3);
    content.appendChild(p);
    content.appendChild(meta);

    card.appendChild(img);
    card.appendChild(content);
    link.appendChild(card);

    return link;
}

function addArticleToDOM(article) {
    const container = document.querySelector('.contenedor-articulos');
    const formEl = document.querySelector('.formulario-contenedor');
    if (!container) return;
    const cardEl = createCardElement(article);
    if (formEl && container.contains(formEl)) {
        container.insertBefore(cardEl, formEl);
    } else {
        container.insertBefore(cardEl, container.firstChild);
    }
}


    form.addEventListener('submit', function (e) {
        e.preventDefault();
        try {
            const formData = {
                imagenUrl: imageUrl ? imageUrl.value.trim() : '',
                titulo: titleInput ? titleInput.value.trim() : '',
                despcripcion: descriptionInput ? descriptionInput.value.trim() : '',
                categoria: categorySelect ? categorySelect.value : '',
                date: dateInput ? dateInput.value : ''
            };

            if (!formData.imagenUrl || !formData.titulo || !formData.despcripcion || !formData.categoria || !formData.date) {
                showMessage('Completa todos los campos');
                return;
            }

            const article = crearArticulo(formData);
            guardarArticulo(article);
            addArticleToDOM(article);
            showMessage('Artículo guardado correctamente');

            form.reset();
            if (titleCount) titleCount.textContent = '0/100 caracteres';
            if (descriptionCount) descriptionCount.textContent = '0/500 caracteres';

        } catch (error) {
            showMessage('Error al guardar el artículo');
        }
    });


