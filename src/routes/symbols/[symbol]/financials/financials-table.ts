
interface TableHeaderCellGrouping {
    value?: string;
    count: number;
}

interface TableHeader {
    colspan?: number;
    groupingRows: TableHeaderCellGrouping[][];
    subRows: string[][];
}


interface TableSubRow {
    value?: string;
    cells: string[];
}

interface TableRow {
    value?: string;
    subRows: TableSubRow[];
}

export interface Table {
    header: TableHeader;
    bodyRows: TableRow[];
    class?: string;
}
