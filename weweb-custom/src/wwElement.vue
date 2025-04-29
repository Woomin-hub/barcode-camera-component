<template>
  <div>
    <button v-if="!cameraOn" @click="startCamera">📷 카메라 켜기</button>

    <div v-else>
      <video
        ref="video"
        autoplay
        playsinline
        @click="captureFrame"
        style="width: 100%; max-width: 480px; border: 2px solid #ccc; border-radius: 12px;"
      ></video>
      <p style="font-size: 12px; color: #666;">(카메라 화면을 눌러 바코드 인식)</p>
    </div>

    <div v-if="barcode">
      <p style="margin-top: 20px; font-size: 16px;">✅ 인식된 바코드: <strong>{{ barcode }}</strong></p>
    </div>
  </div>
</template>

<script>
import { BrowserMultiFormatReader } from '@zxing/browser';

export default {
  data() {
    return {
      cameraOn: false,
      barcode: '',
      codeReader: null,
    };
  },
  methods: {
    async startCamera() {
      this.cameraOn = true;
      const video = this.$refs.video;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false,
        });
        video.srcObject = stream;
      } catch (error) {
        console.error('📛 카메라 접근 실패:', error);
        alert('카메라를 사용할 수 없습니다.');
      }
    },

    async captureFrame() {
      const video = this.$refs.video;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

      if (!this.codeReader) {
        this.codeReader = new BrowserMultiFormatReader();
      }

      try {
        const result = await this.codeReader.decodeFromImageData(imageData);
        this.barcode = result.text;
        console.log('✅ 바코드 인식 성공:', result.text);
      } catch (error) {
        console.warn('🚫 바코드 인식 실패:', error);
        alert('바코드를 인식하지 못했습니다. 다시 시도해주세요.');
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
