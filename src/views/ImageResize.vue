<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" enctype="multipart/form-data" id="image-form">
      <h3>Upload image to resize</h3>
      <label for="file">Choose an image</label>
      <input @change="handleFileUpload" type="file" id="file" name="file" ref="image-input" />
      <br />
      <input type="submit" value="Submit" />
      <br />
      <p class="resize-message">{{message}}</p>
      <div v-show="showImage">
        <a v-bind:href="imageData" v-bind:download="'image.' + imageFormat">
          <img v-bind:src="imageData" alt="thumbnail" />
        </a>
      </div>
    </form>
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
      message: "",
      imageData: "",
      imageFormat: ""
    };
  },
  methods: {
    handleFileUpload() {
      const file = this.$refs["image-input"].files[0];
      file.type.match(/image/)
        ? ((this.image = file), (this.message = ""))
        : (this.message = "Uploaded file must be an image.");
    },
    handleSubmit() {
      if (!this.image) {
        this.message = "Add image to proceed.";
        return;
      }
      let formData = new FormData();
      formData.append("file", this.image);
      axios
        .post("https://dvfcvkc529.execute-api.eu-west-1.amazonaws.com/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
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
$dark: #002d38;
$medium: #0098be;
$bright: #00ccff;
$light: #b5f0ff;

.form-container {
  font-family: Arial, Helvetica, sans-serif;
  background: $medium;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 40vh;
  & > * {
    margin: 20px;
  }
  form {
    background: $light;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    & > * {
      margin: 10px;
    }
    input,
    p {
      margin: 5px;
    }
    input,
    label {
      font-size: 16px;
      padding: 8px;
      margin: 10px;
      width: 200px;
      color: $dark;
      background: $medium;
      outline: none;
      border-style: none;
    }
    #file {
      position: absolute;
      height: 0;
      width: 0;
      opacity: 0;
    }
    img {
      max-height: 200px;
    }
  }
}
</style>