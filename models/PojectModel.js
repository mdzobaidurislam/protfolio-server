const mongoose = require("mongoose");

// img attr
const imageAttrSchema = mongoose.Schema(
  {
    image_name: {
      type: String,
      default: null,
    },
    img_attr_link: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

const projectSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: null,
    },
    cat: {
      type: String,
      default: "react",
    },
    img: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },

    link: {
      type: String,
      default: null,
    },
    img_attr: [imageAttrSchema],
    client_link: {
      type: String,
      default: null,
    },
    server_link: {
      type: String,
      default: null,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
