import { Table, TableHeader, TableRow } from "@/components/ui/table"

const CustomTable = ({ tableData }) => {
    return (
        <Table>
            <TableHeader>
                {
                    tableData?.map((table) => {
                        return (
                            <TableRow>{table?.tableHeader}</TableRow>
                        )
                    })
                }
            </TableHeader>
        </Table>
    )
}

export default CustomTable