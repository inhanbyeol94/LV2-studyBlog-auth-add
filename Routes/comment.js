const express = require('express');
const app = express.Router();

const authMiddleware = require('../middlewares/auth');

const db = require('../database/library');

//create
app.post('/create', authMiddleware, async (req, res) => {
  try {
    const { postId, body } = req.body;
    const { id, nickname } = res.locals.user;

    if (!postId) return res.status(412).json({ message: '게시글 번호는 필수입니다.' });
    if (!body) return res.status(412).json({ message: '댓글 내용은 필수입니다.' });
    if (typeof postId !== 'number') return res.status(412).json({ message: '게시글 번호의 형식이 일치하지 않습니다.' });
    if (typeof body !== 'string') return res.status(412).json({ message: '댓글 내용의 형식이 일치하지 않습니다.' });

    await db.create('comment', { commentId: await db.createCommentId('comment'), postId: postId, userId: id, nickname: nickname, body: body });

    return res.status(201).json({ message: '댓글이 정상 등록되었습니다.' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: '댓글 등록에 실패하였습니다.' });
  }
});

//update
app.patch('/update', authMiddleware, async (req, res) => {
  try {
    const { commentId, body } = req.body;
    const { id } = res.locals.user;

    if (!commentId) return res.status(412).json({ message: '댓글 번호는 필수입니다.' });
    if (!body) return res.status(412).json({ message: '댓글 내용은 필수입니다.' });
    if (typeof commentId !== 'number') return res.status(412).json({ message: '댓글 번호의 형식이 일치하지 않습니다.' });
    if (typeof body !== 'string') return res.status(412).json({ message: '댓글 내용의 형식이 일치하지 않습니다.' });

    const authority = await db.findOne('comment', { commentId: commentId, userId: id });
    if (!authority) return res.status(412).json({ message: '댓글 수정은 본인이 작성한 댓글만 가능합니다.' });

    const result = await db.updateOne('comment', { commentId: commentId }, { body: body });

    if (!result.acknowledged) return res.status(401).json({ message: '댓글 수정에 실패하였습니다.' });
    return res.status(201).json({ message: '정상 수정되었습니다.' });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: '댓글 수정에 실패하였습니다.' });
  }
});

//delete
app.delete('/delete', authMiddleware, async (req, res) => {
  try {
    const { commentId } = req.body;
    const { id } = res.locals.user;
    if (!commentId) return res.status(412).json({ message: '댓글 번호는 필수입니다.' });
    if (typeof commentId !== 'number') return res.status(412).json({ message: '댓글 번호의 형식이 일치하지 않습니다.' });

    const authority = await db.findOne('comment', { commentId: commentId, userId: id });
    if (!authority) return res.status(412).json({ message: '댓글 삭제는 본인이 작성한 댓글만 가능합니다.' });

    const result = await db.deleteOne('comment', { commentId: commentId });

    if (!result.acknowledged) return res.status(401).json({ message: '댓글 삭제에 실패하였습니다.' });
    return res.status(201).json({ message: '정상 삭제되었습니다.' });
  } catch (err) {
    console.log('?');
    console.error(err);
    return res.status(400).json({ message: '댓글 삭제에 실패하였습니다.' });
  }
});

module.exports = app;
