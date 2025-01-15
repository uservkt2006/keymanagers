import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Key, Wallet, ArrowUpRight, Package, CreditCard, BarChart3, TrendingUp } from "lucide-react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'T2', value: 400 },
  { name: 'T3', value: 300 },
  { name: 'T4', value: 600 },
  { name: 'T5', value: 800 },
  { name: 'T6', value: 500 },
  { name: 'T7', value: 700 },
  { name: 'CN', value: 900 },
];

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Tổng người dùng",
      value: "2,350",
      icon: Users,
      change: "+12.5%",
      description: "So với tháng trước",
      onClick: () => navigate("/admin/users"),
    },
    {
      title: "Tổng key đã bán",
      value: "1,203",
      icon: Key,
      change: "+8.2%",
      description: "So với tháng trước",
      onClick: () => navigate("/admin/keys"),
    },
    {
      title: "Doanh thu tháng",
      value: "45,231,000đ",
      icon: Wallet,
      change: "+15.3%",
      description: "So với tháng trước",
      onClick: () => navigate("/admin/revenue"),
    },
    {
      title: "Sản phẩm đang bán",
      value: "24",
      icon: Package,
      change: "+4",
      description: "Sản phẩm mới tháng này",
      onClick: () => navigate("/admin/products"),
    },
  ];

  const recentActivities = [
    {
      id: 1,
      action: "Mua key Premium",
      user: "user123",
      amount: "299,000đ",
      time: "5 phút trước"
    },
    {
      id: 2,
      action: "Nạp tiền",
      user: "john_doe",
      amount: "500,000đ",
      time: "15 phút trước"
    },
    {
      id: 3,
      action: "Kích hoạt key",
      user: "alice89",
      amount: "-",
      time: "30 phút trước"
    }
  ];

  const topSellingKeys = [
    {
      id: 1,
      name: "Premium Key",
      sold: 145,
      revenue: "43,355,000đ"
    },
    {
      id: 2,
      name: "Basic Key",
      sold: 89,
      revenue: "17,800,000đ"
    },
    {
      id: 3,
      name: "Trial Key",
      sold: 67,
      revenue: "6,700,000đ"
    }
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AdminSidebar />
        <main className="flex-1 p-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <div className="flex items-center gap-4">
                <Button variant="outline" onClick={() => navigate("/admin/settings")}>
                  Cài đặt
                </Button>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
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
                    <div className="flex items-center text-sm">
                      <span className="text-green-500 flex items-center">
                        {stat.change}
                        <ArrowUpRight className="ml-1 h-4 w-4" />
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {stat.description}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Doanh thu 7 ngày qua
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Key bán chạy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {topSellingKeys.map((key) => (
                      <div
                        key={key.id}
                        className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                      >
                        <div>
                          <div className="font-medium">{key.name}</div>
                          <div className="text-sm text-muted-foreground">
                            Đã bán: {key.sold}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{key.revenue}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Hoạt động gần đây
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-muted-foreground">
                          User: {activity.user}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{activity.amount}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.time}
                        </div>
                      </div>
                    </div>
                  ))}
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
            onClick={() => navigate("/admin/products")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Quản lý Sản phẩm
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
          <button
            onClick={() => navigate("/admin/settings")}
            className="flex items-center w-full px-4 py-2 text-sm rounded-md hover:bg-accent"
          >
            Cài đặt
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