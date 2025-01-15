import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Tên key không được để trống"),
  autoActive: z.boolean(),
  deviceLimit: z.string(),
  duration: z.number().min(1).max(180),
  attempts: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0),
});

type KeyFormValues = z.infer<typeof formSchema>;

interface KeyDialogProps {
  initialData?: KeyFormValues;
  onSubmit: (data: KeyFormValues) => void;
  trigger: React.ReactNode;
}

export const KeyDialog = ({ initialData, onSubmit, trigger }: KeyDialogProps) => {
  const form = useForm<KeyFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      autoActive: false,
      deviceLimit: "4",
      duration: 30,
      attempts: "1",
      price: 0,
      stock: 0,
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {initialData ? "Chỉnh sửa Key" : "Thêm Key mới"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên Key</FormLabel>
                  <FormControl>
                    <Input placeholder="Premium Key" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="autoActive"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between">
                  <FormLabel>Auto Active</FormLabel>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="deviceLimit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Device Limit</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn giới hạn thiết bị" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="4">4 thiết bị</SelectItem>
                      <SelectItem value="9">9 thiết bị</SelectItem>
                      <SelectItem value="19">19 thiết bị</SelectItem>
                      <SelectItem value="unlimited">Không giới hạn</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Thời hạn (ngày)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={1}
                      max={180}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attempts"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số lần nhập</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn số lần nhập" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">1 lần</SelectItem>
                      <SelectItem value="10">10 lần</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Giá (VND)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số lượng</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      min={0}
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              {initialData ? "Cập nhật" : "Thêm mới"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};