<template>
  <div class="form-container">
    <h2>Resize Image</h2>
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" id="image-form">
      <div>
        <label for="file">Choose image</label>
        <input @change="handleFileUpload" type="file" id="file" name="file" ref="image-input" />
        <input type="submit" value="Submit" v-show="this.enableSubmit" />
      </div>
      <p class="resize-message">{{message}}</p>
    </form>
    <div v-show="showImage">
      <a v-bind:href="imageData" v-bind:download="'image.' + imageFormat">
        <img v-bind:src="imageData" alt="thumbnail" />
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ImageResize",
  data() {
    return {
      image: null,
      showImage: false,
      message:
        "Submitted image will be resized to a width of 500 pixels. Max image size: 4MB",
      imageData: "",
      imageFormat: "",
      enableSubmit: false
    };
  },
  methods: {
    handleFileUpload() {
      const file = this.$refs["image-input"].files[0];
      file.type.match(/image/)
        ? ((this.image = file), (this.message = ""), (this.enableSubmit = true))
        : (this.message = "Uploaded file must be an image.");
    },
    handleSubmit() {
      if (!this.image) {
        this.message = "Add image to proceed.";
        return;
      }
      this.message = "Processing...";
      let formData = new FormData();
      formData.append("file", this.image);
      axios
        .post(
          "https://dvfcvkc529.execute-api.eu-west-1.amazonaws.com/dev/",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(response => {
          const headers = response.headers["content-type"];
          const extension = headers.match(/(?<=\/)[^;]*/);
          this.imageFormat = extension;
          this.imageData = `data:image/${extension};base64,${response.data}`;
          this.showImage = true;
          this.message = "Click image to download";
        })
        .catch(error => console.error(error));
    }
  }
};
</script>

<style scoped lang="scss">
$dark: #303030;
$medium: #c5b3b3;
$bright: #ffd3d3;
$light: #d3d3d3;

.form-container {
  margin: 50px auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 600px;
  form {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0;
    p {
      padding: 20px 0;
      max-width: 330px;
      font-family: "Montserrat", sans-serif;
    }
    input,
    label {
      font-family: "Montserrat", sans-serif;
      font-size: 14px;
      padding: 8px;
      margin-right: 20px;
      width: 110px;
      height: 33px;
      color: $dark;
      background: $light;
      outline: none;
      border-style: none;
      white-space: nowrap;
    }
    #file {
      position: absolute;
      top: -10000px;
      margin: 0;
      padding: 0;
      height: 0;
      width: 0;
      opacity: 0;
    }
  }
  img {
    max-width: 100%;
    max-height: 50vh;
  }
}
@media (max-width: 625px) {
  .form-container form {
    flex-direction: column;
    width: auto;
    font-size: 14px;
    align-items: flex-start;
  }
}
</style>