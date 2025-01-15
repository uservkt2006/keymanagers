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
import { Plus } from "lucide-react";

export const AdminKeys = () => {
  const [keys] = useState([
    {
      id: 1,
      name: "Premium Key",
      autoActive: true,
      deviceLimit: 4,
      duration: 30,
      attempts: 1,
      price: 299000,
      stock: 50,
    },
    // Add more sample data as needed
  ]);

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Key</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Thêm Key
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Tên Key</TableHead>
              <TableHead>Auto Active</TableHead>
              <TableHead>Device Limit</TableHead>
              <TableHead>Thời hạn (ngày)</TableHead>
              <TableHead>Số lần nhập</TableHead>
              <TableHead>Giá (VND)</TableHead>
              <TableHead>Còn lại</TableHead>
              <TableHead>Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {keys.map((key) => (
              <TableRow key={key.id}>
                <TableCell>{key.id}</TableCell>
                <TableCell>{key.name}</TableCell>
                <TableCell>{key.autoActive ? "Có" : "Không"}</TableCell>
                <TableCell>{key.deviceLimit}</TableCell>
                <TableCell>{key.duration}</TableCell>
                <TableCell>{key.attempts}</TableCell>
                <TableCell>{key.price.toLocaleString()}đ</TableCell>
                <TableCell>{key.stock}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" className="mr-2">
                    Sửa
                  </Button>
                  <Button variant="destructive" size="sm">
                    Xóa
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

export default AdminKeys;