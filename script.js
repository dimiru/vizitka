// Базовый функционал для социальной сети
document.addEventListener('DOMContentLoaded', function() {
    // Функционал лайков
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.textContent = 'Не нравится';
                this.style.color = '#ff3347';
            } else {
                this.textContent = 'Нравится';
                this.style.color = '#666';
            }
        });
    });

    // Создание поста
    const publishBtn = document.querySelector('.publish-btn');
    const postInput = document.querySelector('.post-input');
    
    publishBtn.addEventListener('click', function() {
        const postText = postInput.value.trim();
        if (postText) {
            createPost(postText);
            postInput.value = '';
        }
    });

    // Функция создания нового поста
    function createPost(text) {
        const postsContainer = document.querySelector('.posts');
        const newPost = document.createElement('div');
        newPost.className = 'post';
        
        const now = new Date();
        const timeString = now.toLocaleTimeString('ru-RU', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        
        newPost.innerHTML = `
            <div class="post-header">
                <div class="post-author">
                    <div class="author-avatar"></div>
                    <div class="author-info">
                        <span class="author-name">Иван Иванов</span>
                        <span class="post-time">только что</span>
                    </div>
                </div>
            </div>
            <div class="post-content">
                <p>${text}</p>
            </div>
            <div class="post-actions">
                <button class="like-btn">Нравится</button>
                <button class="comment-btn">Комментировать</button>
                <button class="share-btn">Поделиться</button>
            </div>
        `;
        
        postsContainer.insertBefore(newPost, postsContainer.firstChild);
        
        // Добавляем обработчик для лайка в новом посте
        const newLikeBtn = newPost.querySelector('.like-btn');
        newLikeBtn.addEventListener('click', function() {
            this.classList.toggle('liked');
            if (this.classList.contains('liked')) {
                this.textContent = 'Не нравится';
                this.style.color = '#ff3347';
            } else {
                this.textContent = 'Нравится';
                this.style.color = '#666';
            }
        });
    }

    // Поиск
    const searchInput = document.querySelector('.search input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // Здесь будет логика поиска
        console.log('Поиск:', searchTerm);
    });

    // Добавление друзей
    const addFriendButtons = document.querySelectorAll('.add-friend-btn');
    addFriendButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'Добавить') {
                this.textContent = 'Запрос отправлен';
                this.style.backgroundColor = '#666';
            } else {
                this.textContent = 'Добавить';
                this.style.backgroundColor = '#4a76a8';
            }
        });
    });
});
