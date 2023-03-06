const { Course } = require('../modals');

/**
 * GET /courses
 */
exports.getCourses = async (req, res, next) => {
  try {
    const response = await Course.find({});

    response.data = response.forEach((course) => course.toJSON());
    res.status(200).json(response);
  } catch (e) {
    next(e);
    res.status(404).json({ message: e.message });
  }
};

/**
 * GET /courses/:id
 */
exports.getCourse = async (req, res, next) => {
  const { id } = req.params;

  // Get courses
  Course.findById(id)
    .exec((err, course) => {
      if (err) {
        next();
      } else if (!course) {
        res.status(404).json({
          message: 'course not found',
        });
      } else {
        const response = course.toJSON();
        res.status(200).json(response);
      }
    });
};
