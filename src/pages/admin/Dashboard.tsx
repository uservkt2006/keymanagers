import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Key, Wallet, ArrowUpRight } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Tổng người dùng",
      value: "2,350",
      icon: Users,
      change: "+12.5%",
      onClick: () => navigate("/admin/users"),
    },
    {
      title: "Tổng key đã bán",
      value: "1,203",
      icon: Key,
      change: "+8.2%",
      onClick: () => navigate("/admin/keys"),
    },
    {
      title: "Doanh thu tháng",
      value: "45,231,000đ",
      icon: Wallet,
      change: "+15.3%",
      onClick: () => navigate("/admin/revenue"),
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
          </div>

          <div className="grid gap-4 md:grid-cols-3 mb-8">
            {stats.map((stat) => (
              <Card
                key={stat.title}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={stat.onClick}
              >
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="flex items-center text-sm text-green-500">
                    {stat.change}
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Hoạt động gần đây</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Activity items will be added here */}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key bán chạy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Top selling keys will be added here */}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

const AdminSidebar = () => {
  const navigate = useNavigate();
  
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </SidebarHeader>
      <SidebarContent>
        <nav className="space-y-1 px-2">
          <button
            onClick={() => navigate("/admin")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Dashboard
          </button>
          <button
            onClick={() => navigate("/admin/keys")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Quản lý Key
          </button>
          <button
            onClick={() => navigate("/admin/users")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Quản lý User
          </button>
          <button
            onClick={() => navigate("/admin/transactions")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Nạp tiền
          </button>
        </nav>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminDashboard;