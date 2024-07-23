export function formatVND(amount) {
  // Kiểm tra xem giá trị có phải là số không
  if (isNaN(amount) || amount === null) {
    return "0 VND";
  }

  // Định dạng số với cú pháp VND và chuyển về chuỗi
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number(amount)); // Đảm bảo rằng giá trị là số
}
