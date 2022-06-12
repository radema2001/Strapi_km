
// ./src/api/[api-name]/content-types/restaurant/lifecycles.js

module.exports = {
    
  
    afterCreate(event) {
      const { result, params } = event;
  
      console.info("Pengumuman baru telah dibuat", result);
    },
  };
  