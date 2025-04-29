export default {
  editor: {
    label: {
      en: "Barcode Camera Scanner",
      ko: "바코드 카메라 스캐너"
    },
    icon: 'camera',  // 적절한 아이콘이 있다면 사용
    description: {
      en: "Mobile camera barcode/QR code scanner component",
      ko: "모바일 카메라 바코드/QR코드 스캐너 컴포넌트"
    }
  },
  properties: {
    buttonText: {
      label: {
        en: "Scan Button Text",
        ko: "스캔 버튼 텍스트"
      },
      type: "Text",
      defaultValue: "Scan Barcode",
      section: "Content"
    },
    buttonColor: {
      label: {
        en: "Button Color",
        ko: "버튼 색상"
      },
      type: "Color",
      defaultValue: "#3498db",
      section: "Style"
    },
    resultTextColor: {
      label: {
        en: "Result Text Color",
        ko: "결과 텍스트 색상"
      },
      type: "Color",
      defaultValue: "#333333",
      section: "Style"
    },
    cameraMode: {
      label: {
        en: "Camera Mode",
        ko: "카메라 모드"
      },
      type: "Select",
      options: {
        values: [
          { value: "environment", label: { en: "Back Camera", ko: "후면 카메라" } },
          { value: "user", label: { en: "Front Camera", ko: "전면 카메라" } }
        ]
      },
      defaultValue: "environment",
      section: "Settings"
    }
  },
  events: {
    onBarcodeDetected: {
      label: {
        en: "On Barcode Detected",
        ko: "바코드 감지됨"
      },
      description: {
        en: "Triggered when a barcode is successfully detected",
        ko: "바코드가 성공적으로 감지되었을 때 트리거됨"
      },
      returnValue: {
        barcodeValue: {
          type: "Text",
          label: {
            en: "Barcode Value",
            ko: "바코드 값"
          }
        },
        barcodeType: {
          type: "Text",
          label: {
            en: "Barcode Type",
            ko: "바코드 유형"
          }
        }
      }
    }
  }
};