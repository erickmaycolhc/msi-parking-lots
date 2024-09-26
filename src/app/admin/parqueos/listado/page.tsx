"use client";
import React, { ChangeEvent, Key, useCallback, useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Tooltip,
} from "@nextui-org/react";
import { PlusIcon } from "@/utils/PlusIcon";
import { VerticalDotsIcon } from "@/utils/VerticalDotsIcon";
import { SearchIcon } from "@/utils/SearchIcon";
import { ChevronDownIcon } from "@/utils/ChevronDownIcon";
import { EyeIcon } from "@/utils/EyeIcon";
import { columns, parkings } from "@/data/parking";
import { capitalize } from "@/utils/functions";
import { redirect } from "next/navigation";
import Link from "next/link";
import Card from "@/components/card";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["via", "cuadra", "estacionamiento", "actions"];

type ParkingType = (typeof parkings)[0];

export default function App() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(25);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const pages = Math.ceil(parkings.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredParkings = [...parkings];

    if (hasSearchFilter) {
      filteredParkings = filteredParkings.filter((parking) =>
        parking.via.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    // if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    //   filteredParkings = filteredParkings.filter((user) =>
    //     Array.from(statusFilter).includes(user.status),
    //   );
    // }

    return filteredParkings;
  }, [parkings, filterValue, statusFilter]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: ParkingType, b: ParkingType) => {
      const first = a[sortDescriptor.column as keyof ParkingType] as number;
      const second = b[sortDescriptor.column as keyof ParkingType] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const handlerViewMapParking = () => {
    //redirect('/admin/parqueos/mapa/');
  };

  const renderCell = useCallback((user: ParkingType, columnKey: Key) => {
    const cellValue = user[columnKey as keyof ParkingType];

    switch (columnKey) {
      case "via":
        return (
          // <User
          //   avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
          //   classNames={{
          //     description: "text-default-500",
          //   }}
          //   description={user.email}
          //   name={cellValue}
          // >
          //   {user.email}
          // </User>
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.via}
            </p>
          </div>
        );
      case "cuadra":
        return (
          // <div className="flex flex-col">
          //   <p className="text-bold text-small capitalize">{cellValue}</p>
          //   <p className="text-bold text-tiny capitalize text-default-500">{user.team}</p>
          // </div>
          <div className="flex flex-col">
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.cuadra}
            </p>
          </div>
        );
      case "estacionamiento":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.estacionamiento]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          // <div className="relative flex justify-end items-center gap-2">
          //   <Dropdown className="bg-background border-1 border-default-200">
          //     <DropdownTrigger>
          //       <Button isIconOnly radius="full" size="sm" variant="light">
          //         <VerticalDotsIcon className="text-default-400" />
          //       </Button>
          //     </DropdownTrigger>
          //     <DropdownMenu>
          //       <DropdownItem>View</DropdownItem>
          //       <DropdownItem>Edit</DropdownItem>
          //       <DropdownItem>Delete</DropdownItem>
          //     </DropdownMenu>
          //   </Dropdown>
          // </div>
          <div className="relative flex items-center gap-2">
            {/* <span className="text-lg text-default-400 cursor-pointer active:opacity-50" >
                <EyeIcon />
              </span> */}
            <Link
              href={`/admin/parqueos/mapa/${user.id}`}
              className="flex justify-center gap-1 items-center linear rounded-[20px] bg-[#422afb] px-4 py-2 text-md text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:bg-brand-400 dark:hover:bg-brand-300 dark:active:opacity-90"
            >
              <EyeIcon />
            </Link>
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon />
              </span>
            </Tooltip> */}
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Buscar por nombre..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columnas
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            {/* <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button> */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total de resultados: {parkings.length}
          </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por páginas:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    parkings.length,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
      {/* <Card extra={'w-full h-full sm:overflow-auto px-6'}> */}
      {/* <header className="relative flex items-center justify-between pt-4">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            Check Table
          </div>
        </header> */}
      <Card extra={"w-full h-full px-6"}>
        <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
          <Table
            className=""
            isCompact
            removeWrapper
            aria-label="Example table with custom cells, pagination and sorting"
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            checkboxesProps={{
              classNames: {
                wrapper:
                  "after:bg-foreground after:text-background text-background",
              },
            }}
            classNames={classNames}
            selectedKeys={selectedKeys}
            // selectionMode="multiple"
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
          >
            <TableHeader
              columns={headerColumns}
              className="group outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 cursor-default"
            >
              {(column) => (
                <TableColumn
                  key={column.uid}
                  align={column.uid === "actions" ? "center" : "start"}
                  allowsSorting={column.sortable}
                  className={
                    "group px-3 h-10 align-middle whitespace-nowrap text-tiny font-semibold first:rounded-l-lg rtl:first:rounded-r-lg rtl:first:rounded-l-[unset] last:rounded-r-lg rtl:last:rounded-l-lg rtl:last:rounded-r-[unset] data-[sortable=true]:cursor-pointer data-[hover=true]:text-foreground-400 outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-start bg-transparent text-default-500 border-b border-divider"
                  }
                >
                  {column.name}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody emptyContent={"No users found"} items={sortedItems}>
              {(item) => (
                <TableRow key={item.id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
      {/* </Card > */}
    </>
  );
}
