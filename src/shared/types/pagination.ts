export interface PaginationDto<T> {
  items: T[];
  links: PaginationLinksDto;
  meta: PaginationMetaDto;
}

interface PaginationLinksDto {
  first: string;
  last?: string;
  next?: string;
  previous?: string;
}

interface PaginationMetaDto {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
