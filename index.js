"use strict";

// ���W���[���C���|�[�g
const express = require("express");
const server = express();

// Web�A�v���P�[�V�����N��
server.listen(process.env.PORT || 3000);

// �T�[�o�[�N���m�F
server.get('/', (req, res) => {
    res.send('Hello World!');
});

// Bot���烁�b�Z�[�W�ɉ���
server.post('/callback', (req, res) => {
    res.sendStatus(200);
});