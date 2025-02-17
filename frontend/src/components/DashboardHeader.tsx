"use client";

import PropTypes from "prop-types";
// import MemoSearch from "@/icons/Search";
import MemoUserProfile from "@/icons/UserProfile";
import { DashboardHeaderProps } from "@/lib/types";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import MemoFilter from "@/icons/Filter";
// import MemoExport from "@/icons/Export";
import MemoCart from "@/icons/Cart";
import MemoCartCheck from "@/icons/CartCheck";
import MemoExport2 from "@/icons/Export2";
import MemoCard from "@/icons/Card";
import PaymentDialog from "./Modal/payment-dialog";
import { useState } from "react";
import AddProductDialog from "./Modal/add-product-dialog";
// import { Input } from "./ui/input";
import { Button } from "./ui/button";
import AdduserDialog from "./Modal/add-user-dialog";
import { useAddProductStore } from "@/store/addProduct";
import { useAddUserStore } from "@/store/addUser";
import { usePathname } from "next/navigation";
const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  subtitle,
  // showSearch,
  // showExport,
  showAddUser,
  showAddProduct,
  showProceed,
  showMainExport,
  // showSortProduct,
  showApproveAll,
  // period = "Last 360 days",
  // onSearchClick,
  onAddProductClick,
  onApproveAllClick,
}) => {
  const pathname = usePathname();
  const openAddProduct = useAddProductStore((state) => state.isOpen);
  const setOpenAddProduct = useAddProductStore((state) => state.setIsOpen);
  const isOpen = useAddUserStore((state) => state.isOpen);
  const setIsOpen = useAddUserStore((state) => state.setIsOpen);

  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  const sampleItems = [
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
    { name: "Fresh Del Monte Apple", quantity: 20, amount: 20000 },
  ];
  // console.log(pathname.slice(0, 3));
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center px-10 py-5 justify-between gap-4 md:gap-8">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold">{title}</h1>
          <p className="text-[#292D3280] text-sm">{subtitle}</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 flex-wrap md:flex-nowrap ">
          {/* {showSearch && (
            <Input
              placeholder="Search product by name or ID"
              className="rounded-xl text-sm bg-gray-50 h-10 px-4 py-2"
              leftIcon={<MemoSearch className="h-8 w-8 shrink-0" />}
            />
          )} */}
          {/* {showExport && (
            <Button
              onClick={onSearchClick}
              className="inline-flex items-center justify-center rounded-xl text-sm bg-[#292D3208] text-[#FFFFFF] h-10 px-4 py-2">
              <MemoExport className="h-5 w-10" />
            </Button>
          )} */}
          {showAddUser && pathname.slice(0, 3) !== "/r/" && (
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-xl text-sm border border-input bg-[#292D3208] text-[#292D32B2] hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              <MemoUserProfile className="h-4 w-4 mr-2 shrink-0" />
              Add new user
            </Button>
          )}
          {/* {showSortProduct && (
            <Select defaultValue={period}>
              <SelectTrigger className="h-8 w-[160px] border-none text-xs bg-[#292D3208] py-5">
                <MemoFilter className="h-4 w-4 mr-2" />
                <SelectValue placeholder={period} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Last 360 days">Last 360 days</SelectItem>
                <SelectItem value="Last 90 days">Last 90 days</SelectItem>
                <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                <SelectItem value="Last 7 days">Last 7 days</SelectItem>
              </SelectContent>
            </Select>
          )} */}
          {showAddProduct && pathname.slice(0, 3) !== "/r/" && (
            <Button
              onClick={() => setOpenAddProduct(!openAddProduct)}
              className="inline-flex items-center justify-center shrink-0 rounded-xl text-sm bg-[#17ABEC] text-[#FFFFFF] hover:bg-[#9dd3ea] h-10 px-4 py-2"
            >
              <MemoCart className="h-4 w-4 mr-2 shrink-0" />
              Add new Product
            </Button>
          )}
          {showApproveAll && (
            <Button
              onClick={onApproveAllClick}
              className="inline-flex items-center justify-center shrink-0 rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#17ABEC] text-[#FFFFFF] hover:bg-[#9dd3ea] h-10 px-4 py-2">
              <MemoCartCheck className="h-4 w-4 mr-2 shrink-0" />
              Approve All
            </Button>
          )}
          {showMainExport && (
            <button
              onClick={onAddProductClick}
              className="inline-flex items-center justify-center rounded-xl text-sm bg-[#17ABEC] text-[#FFFFFF] hover:bg-[#9dd3ea] h-10 px-8 py-2">
              <MemoExport2 className="h-4 w-4 mr-2" />
              Export
            </button>
          )}
          {showProceed && (
            <button
              onClick={() => setShowPaymentDialog(true)}
              className="inline-flex items-center justify-center rounded-xl text-sm bg-[#17ABEC] text-[#FFFFFF] hover:bg-[#9dd3ea] h-10 px-8 py-2">
              <MemoCard className="h-4 w-4 mr-2" />
              Proceed
            </button>
          )}
        </div>
      </div>
      <AddProductDialog
        open={openAddProduct}
        onOpenChange={setOpenAddProduct}
      />
      <AdduserDialog open={isOpen} onOpenChange={setIsOpen} />
      <PaymentDialog
        open={showPaymentDialog}
        onOpenChange={setShowPaymentDialog}
        items={sampleItems}
      />
    </main>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  showSearch: PropTypes.bool.isRequired,
  showExport: PropTypes.bool.isRequired,
  showProceed: PropTypes.bool.isRequired,
  showAddUser: PropTypes.bool.isRequired,
  showAddProduct: PropTypes.bool.isRequired,
  showMainExport: PropTypes.bool.isRequired,
  showSortProduct: PropTypes.bool.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onAddUserClick: PropTypes.func.isRequired,
  onAddProductClick: PropTypes.func.isRequired,
};

export default DashboardHeader;
