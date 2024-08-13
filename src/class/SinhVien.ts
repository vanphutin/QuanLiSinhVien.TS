import type { IXepLoai } from "../interface/IXepLoai";

export abstract class SinhVien implements IXepLoai {
  private maSinhVien: string;
  private hoTen: string;
  private gioiTinh: boolean;

  constructor(maSinhVien: string, hoTen: string, gioiTinh: boolean) {
    this.maSinhVien = maSinhVien;
    this.hoTen = hoTen;
    this.gioiTinh = gioiTinh;
  }

  public abstract tinhDiemTrungBinh(): number;

  xepLoaiSinhVien(): string {
    if (this.tinhDiemTrungBinh() <= 3) return "Yeu";
    if (this.tinhDiemTrungBinh() <= 5) return "Kha";
    if (this.tinhDiemTrungBinh() <= 6.5) return "Trung Binh";
    if (this.tinhDiemTrungBinh() <= 8) return "Gioi";
    return "Xuat Sac";
  }

  //toString - @override
  toString(): string {
    return `Ma sinh vien : ${this.maSinhVien}, Ho va ten : ${
      this.hoTen
    }, Gioi tinh : ${this.gioiTinh ? "nam" : "nu"}`;
  }

  //getter - setter
  public getMaSinhVien(): string {
    return this.maSinhVien;
  }
  public setMaSinhVien(maSinhVien: string): string {
    return (this.maSinhVien = maSinhVien);
  }

  public getHoTen(): string {
    return this.hoTen;
  }
  public setHoTen(hoTen: string): string {
    return (this.hoTen = hoTen);
  }

  public getGioiTinh(): boolean {
    return this.gioiTinh;
  }

  public setGioiTinh(gioiTinh: boolean): boolean {
    return (this.gioiTinh = gioiTinh);
  }
}
