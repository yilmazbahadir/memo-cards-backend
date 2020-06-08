import { Joi, ValidationError, validate } from 'express-validation';
import ProjectController from '../controllers/ProjectController';

var express = require('express');
var router = express.Router();

const addProjectValidationSchema = {
  body: Joi.object({
    name: Joi.string().required().messages({
      'any.required': `"name" is a required field`,
    }),
    description: Joi.string().required(),
  }).unknown(true),
};

/* GET projects listing */
router.get('/', async function (req, res, next) {
  var p = new ProjectController();
  res.send(await p.getProjectList(req, res));
});

router.get('/:id', async function (req, res, next) {
  var p = new ProjectController();
  res.send(await p.findProject(req, res));
});

router.post('/', validate(addProjectValidationSchema), async function (
  req,
  res,
  next
) {
  var p = new ProjectController();
  res.send(await p.createProject(req, res, next).catch(next));
});

router.put('/:id', async (req, res, next) => {
  var p = new ProjectController();
  res.send(await p.updateProject(req, res, next).catch(next));
});

router.delete('/:id', async (req, res, next) => {
  var p = new ProjectController();
  p.deleteProject(req, res, next)
    .then((p) => res.send(p))
    .catch(next);
});

export default router;
