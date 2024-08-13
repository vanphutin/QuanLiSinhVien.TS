import { SinhVien } from "./SinhVien";

export class SinhVienKinhTe extends SinhVien {
  private NguyenLiKeToan: number;
  private Marketing: number;

  constructor(
    maSinhVien: string,
    hoTen: string,
    gioiTinh: boolean,
    NguyenLiKeToan: number,
    Marketing: number
  ) {
    super(maSinhVien, hoTen, gioiTinh);
    this.NguyenLiKeToan = NguyenLiKeToan;
    this.Marketing = Marketing;
  }

  tinhDiemTrungBinh(): number {
    return (this.NguyenLiKeToan * 2 + this.Marketing) / 3;
  }

  //@Override
  toString(): string {
    return `${super.toString()}, NguyenLiKeToan = ${
      this.NguyenLiKeToan
    }, Marketing = ${
      this.Marketing
    }, Diem trung binh = ${this.tinhDiemTrungBinh().toFixed(
      3
    )}, xep loai : ${super.xepLoaiSinhVien()}`;
  }

  //getter - setter
  public getNguyenLiKeToan(): number {
    return this.NguyenLiKeToan;
  }
  public setNguyenLiKeToan(NguyenLiKeToan: number): number {
    return (this.NguyenLiKeToan = NguyenLiKeToan);
  }

  public getMarketing(): number {
    return this.Marketing;
  }

  public setMarketing(Marketing: number): number {
    return (this.Marketing = Marketing);
  }
}
