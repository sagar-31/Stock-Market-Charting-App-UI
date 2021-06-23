import http from "../http-common";
class UploadFile {
    upload(file, onUploadProgress) {
      let formData = new FormData();
  
      formData.append("file", file);
  
      return http.post("http://localhost:8080/excel/uploadExcel", formData, {
        headers: {
          "mode":"no-cors",
          "Content-Type": "multipart/form-data",
          "header": {"Access-Control-Allow-Origin": '*'},
        },
        onUploadProgress,
      });
    }
  
    getFiles() {
      return http.get("/files");
    }
    
    
  }
  
  export default new UploadFile();