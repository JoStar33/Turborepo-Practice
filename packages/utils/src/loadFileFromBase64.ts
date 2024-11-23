export default function loadFileFromBase64(base64String: string) {
  if (!base64String) {
    return null;
  }
  const byteExtractPrevStringFirst = base64String.split(',')[1];
  const byteExtractPrevStringSecond = base64String.split(',')[0];
  if (!byteExtractPrevStringSecond) {
    return null;
  }
  const mimeExtractPrevString = byteExtractPrevStringSecond.split(':')[1];
  if (!byteExtractPrevStringFirst || !mimeExtractPrevString) {
    return null;
  }
  const byteString = atob(byteExtractPrevStringFirst);
  const mimeString = mimeExtractPrevString.split(';')[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  console.log(new File([blob], 'PDF_파일.pdf', { type: blob.type }));
  return new File([blob], 'PDF_파일.pdf', { type: blob.type });
}
