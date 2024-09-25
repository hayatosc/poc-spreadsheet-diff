type Array2<T> = [T, T];
type Range = `${string}${number}:${string}${number}`;

export default function SpreadSheet(sheetName: Array2<string>, sheetRange: Range) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheets = getSheets(spreadsheet, sheetName, sheetRange);
}

const getSheets = (spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet, sheetName: Array2<string>, sheetRange: Range) => {
  const beforeSheet = spreadsheet.getSheetByName(sheetName[0]);
  const afterSheet = spreadsheet.getSheetByName(sheetName[1]);
  return {
    before: beforeSheet?.getRange(sheetRange).getValues(),
    after: afterSheet?.getRange(sheetRange).getValues(),
  };
};
