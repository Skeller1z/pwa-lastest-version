import React from 'react';

const UpdateButton = () => {
  const handleUpdate = () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
      // ส่งข้อมูลไปยัง Service Worker เพื่ออัปเดต
      navigator.serviceWorker.controller.postMessage({ type: 'SKIP_WAITING' });
    }
  };

  return (
    <button onClick={handleUpdate}>อัปเดตแอปพลิเคชัน</button>
  );
};

export default UpdateButton;
