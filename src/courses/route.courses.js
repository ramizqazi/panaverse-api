const express = require('express');

const courses = require('./controller.courses');

const router = express.Router();

router.get('/', courses.getCourses);

router.get(
  '/:id',
  courses.getCourse,
);

module.exports = router;
