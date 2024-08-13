import { v4 as uuidV4 } from "uuid";
import { SinhVien } from "./class/SinhVien";
import { SinhVienKinhTe } from "./class/SinhVienKinhTe";
import { CongNgheThongTin } from "./class/CongNgheThongTin";

// Khởi tạo đối tượng
let SinhVienCNT = new CongNgheThongTin(
  uuidV4(),
  "Van Phu Tin",
  true,
  10,
  10,
  10
);
let SinhVienKt = new SinhVienKinhTe(uuidV4(), "Van Phu Tin", true, 4, 5);

// In thông tin ra console
console.log(SinhVienCNT.toString());
console.log(SinhVienKt.toString());

// Cập nhật nội dung của phần tử ul
const ulDiv = document.querySelector("ul");

if (ulDiv) {
  // Kiểm tra và sửa cú pháp trong innerHTML
  ulDiv.innerHTML = `
    <li class="student-info">${SinhVienCNT.toString()}</li>
    <li class="student-info">${SinhVienKt.toString()}</li>
  `;
}
