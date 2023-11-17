"use client";

import { ROUTES } from "@/lib/routes";
import { MenuItem, renderSidebarMainMenuItems } from "@/lib/utils";
import { Layout, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const { Content } = Layout;

const StockMarket = (
  <Menu>
    <Menu.Item key="1">
      <Link href="/user/capital-market/report/stock-market">
        Contract Notes
      </Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link href="/user/capital-market/report/stock-market/job-order">
        Job Order
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/user/capital-market/report/stock-market/statutory-return">
        Statutory Returns
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/user/capital-market/report/stock-market/trade-summary">
        Trade Summary
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/user/capital-market/report/stock-market/trade-listing">
        Trade Listing
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link href="/user/capital-market/report/stock-market/trade-valuation">
        Trade Valuation
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link href="/user/capital-market/report/stock-market/trade-reporting">
        NSE Transaction Reporting
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link href="/user/capital-market/report/stock-market/settlement-advice">
        NSE Settlement Advice
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link href="/user/capital-market/report/stock-market/direct-cash-settlement">
        NSE Direct Cash Transaction
      </Link>
    </Menu.Item>
  </Menu>
);

const PortfolioMenu = (
  <Menu>
    <Menu.Item key="2">
      <Link href="/user/capital-market/report/portfolio-management/portfolio-holding">
        Portfolio Holdings
      </Link>
    </Menu.Item>
    <Menu.Item key="3">
      <Link href="/user/capital-market/report/portfolio-management/portfolio-valuation">
        Portfolio Valuation
      </Link>
    </Menu.Item>
    <Menu.Item key="4">
      <Link href="/user/capital-market/report/portfolio-management/customer-portfolio-valuation">
        Valuation Balances
      </Link>
    </Menu.Item>
    <Menu.Item key="5">
      <Link href="/user/capital-market/report/portfolio-management/customer-portfolio-movement">
        Portfolio Movement
      </Link>
    </Menu.Item>
    <Menu.Item key="6">
      <Link href="/user/capital-market/report/portfolio-management/portfolio-holding-cscs-data">
        Holdings CSCS - Data
      </Link>
    </Menu.Item>
    <Menu.Item key="7">
      <Link href="/user/capital-market/report/portfolio-management/daily-price-list">
        Daily Price List
      </Link>
    </Menu.Item>
    <Menu.Item key="8">
      <Link href="/user/capital-market/report/portfolio-management/gainers-losers">
        Gainers and Losers Listings
      </Link>
    </Menu.Item>
    <Menu.Item key="9">
      <Link href="/user/capital-market/report/portfolio-management/gainers-losers-comparative-change">
        Gainers and Losers Changes
      </Link>
    </Menu.Item>
  </Menu>
);

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const pathname = usePathname();


 
const parentRoute = '/user/capital-market/report/stock-market'
const parentRoute2 = '/user/capital-market/report/portfolio-management'
  return (
    <Layout>
      <div className="flex justify-start gap-5 p-5 items-center">
        <Link
          href="/user/capital-market/report/customer-statement-of-account"
          className={`${
            pathname ===
            "/user/capital-market/report/customer-statement-of-account"
              ? "bg-[#194bfb] rounded text-white p-2"
              : "text-black"
          }`}
        >
          Customer Statement Of Account
        </Link>
        <Dropdown
          overlay={StockMarket}
          overlayStyle={{ width: "30%", paddingLeft: "10px" }}
          className="text-black"
        >
          <Link
            href="/user/capital-market/report/stock-market"
            className={`${
              pathname.startsWith(parentRoute)
                ? "bg-[#194bfb] rounded text-white p-2"
                : ""
            }`}
          >
            Stock Market <DownOutlined />
          </Link>
        </Dropdown>
        <Dropdown
          overlay={PortfolioMenu}
          overlayStyle={{ width: "30%", paddingLeft: "10px" }}
          className="text-black"
        >
          <Link
            href="/user/capital-market/report/portfolio-management"
            
            className={`${
              pathname.startsWith(parentRoute2)
                ? "bg-[#194bfb] rounded text-white p-2"
                : ""
            }`}
          >
            Portfolio Management <DownOutlined />
          </Link>
        </Dropdown>
      </div>

      <Content className="pt-[5px]">{children}</Content>
    </Layout>
  );
}
