import { SinhVien } from "./SinhVien";

export class CongNgheThongTin extends SinhVien {
  html: number;
  javascript: number; // Sửa lỗi đánh máy
  reactJS: number;

  constructor(
    maSinhVien: string,
    hoTen: string,
    gioiTinh: boolean,
    html: number,
    javascript: number, // Sửa lỗi đánh máy
    reactJS: number
  ) {
    super(maSinhVien, hoTen, gioiTinh);
    this.html = html;
    this.javascript = javascript; // Sửa lỗi đánh máy
    this.reactJS = reactJS;
  }

  public tinhDiemTrungBinh(): number {
    return (this.html * 2 + this.javascript + this.reactJS) / 4; // Sửa lỗi đánh máy
  }

  //@Override
  toString(): string {
    return `${super.toString()}, html = ${this.html}, javascript = ${
      this.javascript
    }, reactJS = ${
      this.reactJS
    }, Diem trung binh = ${this.tinhDiemTrungBinh().toFixed(3)}, xep loai : ${
      super.xepLoaiSinhVien() // Đảm bảo thuộc tính hoặc phương thức này tồn tại trong lớp SinhVien
    }`;
  }

  //getter - setter
  public getHtml(): number {
    return this.html;
  }
  public setHtml(html: number): void {
    this.html = html;
  }

  public getJavascript(): number {
    return this.javascript; // Sửa lỗi đánh máy
  }

  public setJavascript(javascript: number): void {
    this.javascript = javascript; // Sửa lỗi đánh máy
  }

  public getReactJS(): number {
    return this.reactJS;
  }
  public setReactJS(reactJS: number): void {
    this.reactJS = reactJS;
  }
}
