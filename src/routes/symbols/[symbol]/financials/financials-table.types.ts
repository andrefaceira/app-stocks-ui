
type TableRowGroup = {
    label?: string,
    rows: TableRow[],
};

type TableRow = {
    label?: string,
    cells: TableRowCell[],
};

type TableRowCell = {
    value?: string;
    count?: number;
};
