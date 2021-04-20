const router = require('express').Router();
const { BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', withAuth, async (req, res) => {
    res.render('createblogpost', { logged_in: true });
    return;
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            author_id: req.session.user_id,
        });

        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/:id/comment/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            comment_content: req.body.comment_content,
            blog_id: req.params.id,
            author_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id);

        const blog = blogPostData.get({ plain: true });

        res.render('editblogpost', {
            ...blog,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.update(
            {
                blog_title: req.body.blog_title,
                blog_content: req.body.blog_content,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        if (!blogPostData) {
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/edit/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!blogPostData) {
            res.status(404).json({ message: 'No blog post found with this id!' });
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;