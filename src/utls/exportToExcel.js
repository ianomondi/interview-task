import { utils as XLSXUtils, write as writeXLSX } from "xlsx";
import { saveAs } from "file-saver";

const exportToExcel = (exportData, fileRemark = "InspectionData") => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const keys = Array.from(
    new Set(
      exportData.flatMap((item) =>
        Object.keys(item).map((key) => key.replace(/\s/g, "_"))
      )
    )
  );

  const ws = XLSXUtils.json_to_sheet(exportData, {
    header: keys,
  });

  const wscols = keys.map((key) => {
    const maxColumnWidth = Math.max(
      ...exportData.map((item) => (item[key] ? item[key].toString().length : 0))
    );
    return { wch: Math.min(20, Math.max(10, maxColumnWidth)) }; // Set a minimum and maximum width
  });

  ws["!cols"] = wscols;

  const wb = XLSXUtils.book_new();
  XLSXUtils.book_append_sheet(wb, ws, fileRemark);

  const excelBuffer = writeXLSX(wb, { bookType: "xlsx", type: "array" });
  const data = new Blob([excelBuffer], { type: fileType });
  saveAs(data, `${fileRemark}_Export` + fileExtension);
};

export default exportToExcel;
