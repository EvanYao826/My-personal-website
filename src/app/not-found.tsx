import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-primary mb-4">404</p>
        <h2 className="text-xl font-semibold mb-2">页面未找到</h2>
        <p className="text-muted-foreground mb-6">
          抱歉，您访问的页面不存在。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Home className="h-4 w-4" />
          返回首页
        </Link>
      </div>
    </div>
  );
}
