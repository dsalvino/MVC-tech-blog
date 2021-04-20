const newCommentHandler = async (event) => {
  event.preventDefault();

  const id = document.querySelector('#blogpost-id').value.trim();
  const content = document.querySelector('#comment-content').value.trim();

  if (content) {
    const response = await fetch(`/api/blog/${id}/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment_content: content}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace(`/blog/${id}`);
    } else {
      alert('Failed to create comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);

