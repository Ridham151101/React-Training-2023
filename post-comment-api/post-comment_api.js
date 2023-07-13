// Fetch posts data
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    // Get the container element for posts
    const postsContainer = document.getElementById('posts');

    // Iterate over each post
    posts.forEach(post => {
      // Create a post element
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.dataset.id = post.id;
      postElement.userId = post.userId;
      // console.log(postElement.dataset.userId);
      postElement.innerHTML = `
        <h2>Post Title : ${post.title}</h2>
        <p>Post Body : ${post.body}</p>
        <div class="comment-heading">Comments:</div>
        <div class="comments"></div>
      `;

      // Append the post element to the container
      postsContainer.appendChild(postElement);
    });
  });

// Fetch comments data
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    // Get all post elements
    const postElements = document.querySelectorAll('.post');
    // console.log(postElements);

    // Iterate over each comment
    comments.forEach(comment => {
      // Find the post element associated with the comment
      // console.log(comment);
      const postId = comment.postId;
      const postElement = Array.from(postElements).find(post => post.dataset.id === postId.toString());
      // console.log(postElement);

      if (postElement) {
        // Create a comment element
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
          <h3>name: ${comment.name}</h3>
          <p>description: ${comment.body}</p>
        `;

        // Append the comment element to the post element
        const commentsContainer = postElement.querySelector('.comments');
        commentsContainer.appendChild(commentElement);
      }
    });
  });


// Fetch user data
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Get all post elements
    // console.log(users);
    const postElements = document.querySelectorAll('.post');
    // console.log(postElements);

    // Iterate over each post
    postElements.forEach(postElement => {
      // Find the user associated with the post
      // console.log(postElement);
      const user = users.find(user => user.id === postElement.userId);
      // console.log(user);

      if (user) {
        // Create a username element
        const usernameElement = document.createElement('span');
        usernameElement.classList.add('username');
        usernameElement.textContent = `Created by: ${user.username}`;

        // Prepend the username element to the post element
        postElement.insertBefore(usernameElement, postElement.firstChild);
      }
    });
  });
