import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-primary">
            KeyStore
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/products" className="text-gray-600 hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <Link to="/pricing" className="text-gray-600 hover:text-primary transition-colors">
              Bảng giá
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary transition-colors">
              Liên hệ
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="hidden md:inline-flex"
            >
              Đăng nhập
            </Button>
            <Button
              onClick={() => navigate("/register")}
              className="hidden md:inline-flex"
            >
              Đăng ký
            </Button>
            <Button
              variant="outline"
              className="md:hidden"
              onClick={() => navigate("/login")}
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};