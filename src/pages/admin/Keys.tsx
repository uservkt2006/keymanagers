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
import { KeyDialog } from "@/components/admin/KeyDialog";
import { useToast } from "@/components/ui/use-toast";

interface Key {
  id: number;
  name: string;
  autoActive: boolean;
  deviceLimit: string;
  duration: number;
  attempts: string;
  price: number;
  stock: number;
}

export const AdminKeys = () => {
  const { toast } = useToast();
  const [keys, setKeys] = useState<Key[]>([
    {
      id: 1,
      name: "Premium Key",
      autoActive: true,
      deviceLimit: "4",
      duration: 30,
      attempts: "1",
      price: 299000,
      stock: 50,
    },
  ]);

  const handleAddKey = (data: Omit<Key, "id">) => {
    const newKey = {
      ...data,
      id: keys.length + 1,
    };
    setKeys([...keys, newKey]);
    toast({
      title: "Thành công",
      description: "Đã thêm key mới",
    });
  };

  const handleEditKey = (id: number, data: Omit<Key, "id">) => {
    setKeys(keys.map((key) => (key.id === id ? { ...data, id } : key)));
    toast({
      title: "Thành công",
      description: "Đã cập nhật key",
    });
  };

  const handleDeleteKey = (id: number) => {
    setKeys(keys.filter((key) => key.id !== id));
    toast({
      title: "Thành công",
      description: "Đã xóa key",
    });
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Key</h1>
        <KeyDialog
          onSubmit={handleAddKey}
          trigger={
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Thêm Key
            </Button>
          }
        />
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
                <TableCell className="space-x-2">
                  <KeyDialog
                    initialData={key}
                    onSubmit={(data) => handleEditKey(key.id, data)}
                    trigger={
                      <Button variant="outline" size="sm">
                        Sửa
                      </Button>
                    }
                  />
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDeleteKey(key.id)}
                  >
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