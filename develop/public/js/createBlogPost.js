const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();

    console.log("Title: ", title);
    console.log("Content: ", content);

    if (title && content) {
        const response = await fetch(`/api/blog`, {
            method: 'POST',
            body: JSON.stringify({ blog_title: title, blog_content: content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog post');
        }
    }
};

document
    .querySelector('.new-blogpost-form')
    .addEventListener('submit', newFormHandler);

