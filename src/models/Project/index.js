var validate = require('./validate');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
    },
    name: {
      type: Schema.Types.String,
      unique: true,
      validate: [{ validator: validate, msg: 'Invalid project name' }],
    },
    description: {
      type: Schema.Types.String,
    },
    createdDate: {
      type: Schema.Types.Date,
    },
    tags: {
      type: Schema.Types.Array,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
