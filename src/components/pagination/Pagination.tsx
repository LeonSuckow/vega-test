import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  Pagination as PaginationUI,
} from "@/components/ui/pagination";
import { PaginationComponentProps } from "@/interface/pagination";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";

export const Pagination = ({
  handleUpdatePagination,
  pagination,
}: PaginationComponentProps) => {
  const [inputGoToPage, setInputGoToPage] = useState(1);
  return (
    <div className="flex justify-between">
      <div>
        <PaginationUI>
          <PaginationContent>
            {new Array(pagination.totalPages).fill(0).map((_, index) => {
              const isCurrent = pagination.currentPage === index + 1;

              return (
                <PaginationLink
                  onClick={() =>
                    handleUpdatePagination({
                      ...pagination,
                      currentPage: index + 1,
                    })
                  }
                  className={
                    isCurrent ? "text-vega-yellow-800" : "text-vega-gray-600"
                  }
                  isActive={pagination.currentPage === index + 1}
                  key={`page-${index + 1}`}
                >
                  {index + 1}
                </PaginationLink>
              );
            })}
            <PaginationItem>
              <Button
                type="button"
                variant="outline"
                className="text-vega-yellow-800"
                disabled={!pagination.hasNext}
                onClick={() => {
                  if (!pagination.hasNext) return;
                  handleUpdatePagination({
                    ...pagination,
                    currentPage: pagination.currentPage + 1,
                  });
                }}
              >
                Próxima <ArrowRight className="h-4 w-4" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </PaginationUI>
      </div>
      <div className="flex gap-4">
        <span className="text-vega-gray-600">Ir para página</span>
        <div className="h-8 flex item-scenter justify-center">
          <input
            type="text"
            name="inputGoToPage"
            id="inputGoToPage"
            onChange={(event) => setInputGoToPage(Number(event.target.value))}
            value={inputGoToPage}
            className="w-8 h-full text-center  border-2 rounded-tr-none rounded-br-none border-vega-blue-300 rounded-md text-vega-blue-400"
          />
          <Button
            type="button"
            className="h-full text-white w-8 border-2 border-vega-yellow-800 bg-vega-yellow-800 rounded-md rounded-tl-none rounded-bl-none "
            variant="outline"
            onClick={() => {
              if (inputGoToPage > pagination.totalPages) return;

              handleUpdatePagination({
                ...pagination,
                currentPage: inputGoToPage,
              });
            }}
          >
            Ir
          </Button>
        </div>
      </div>
    </div>
  );
};
