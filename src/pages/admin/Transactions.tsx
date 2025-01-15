import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export const AdminTransactions = () => {
  const [transactions] = useState([
    {
      id: 1,
      username: "user1",
      amount: 500000,
      status: "pending",
      bankInfo: "MB Bank - 0123456789",
      date: "2024-01-15 14:30",
    },
    // Add more sample data as needed
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý nạp tiền</h1>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Số tiền (VND)</TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Thông tin bank</TableHead>
              <TableHead>Thời gian</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.username}</TableCell>
                <TableCell>{transaction.amount.toLocaleString()}đ</TableCell>
                <TableCell>
                  <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">
                    {transaction.status}
                  </span>
                </TableCell>
                <TableCell>{transaction.bankInfo}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Duyệt
                  </Button>
                  <Button variant="destructive" size="sm">
                    Từ chối
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTransactions;