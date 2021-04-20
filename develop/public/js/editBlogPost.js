const editFormHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#blogpost-id').value.trim();
    const title = document.querySelector('#blogpost-title').value.trim();
    const content = document.querySelector('#blogpost-content').value.trim();

    console.log("Id: ", id);
    console.log("Title: ", title);
    console.log("Content: ", content);

    if (title && content) {
        const response = await fetch(`/api/blog/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ id: id, blog_title: title, blog_content: content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to edit blog post');
        }
    }
};

const delButtonHandler = async (event) => {
    event.preventDefault();

    const id = document.querySelector('#blogpost-id').value.trim();

    if (id) {
        const response = await fetch(`/api/blog/edit/${id}`, {
            method: 'DELETE',
            body: JSON.stringify({ id: id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete blog post');
        }
    }
};

document
    .querySelector('.edit-blogpost-form')
    .addEventListener('submit', editFormHandler);

document
    .querySelector('#delete-post')
    .addEventListener('click', delButtonHandler);