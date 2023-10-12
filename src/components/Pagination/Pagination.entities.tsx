export interface IPropsPagination {
  currentPage: number;
  onSetCurrentPage: (page: number) => void;
  totalPages: number;
  onHandleCurrentPage: (page: number) => void;
}
