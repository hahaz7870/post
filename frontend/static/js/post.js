document.addEventListener('DOMContentLoaded', function() {
    const buttonCreate = document.querySelector('.button_create');
    const form = document.querySelector('.popup');
    const postsContainer = document.querySelector('.commit');

    buttonCreate.addEventListener('click', function() {
        form.classList.add('active');
    });

    document.querySelector('.close-popup').addEventListener('click', function() {
        form.classList.remove('active');
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const authorInput = form.querySelector('input[name="author"]');
        const nameInput = form.querySelector('input[name="name"]');
        const bodyInput = form.querySelector('input[name="tel"]');

        const author = authorInput.value;
        const title = nameInput.value;
        const body = bodyInput.value;

        const postHTML = `
            <div class="one">
                <h3>${title}</h3>
                <p>Автор: ${author}</p>
                <p>${body}</p>
                <button class="button_open">Открыть</button>
                <button class="button_open">Удалить</button>
            </div>
        `;

        postsContainer.insertAdjacentHTML('beforeend', postHTML);

        form.classList.remove('active');
        authorInput.value = '';
        nameInput.value = '';
        bodyInput.value = '';
    });
});
