import { Button } from "./ui/button";

export function Footer() {
    return (
<footer className="flex h-16 items-center justify-between border-t bg-white px-4 dark:border-gray-800 dark:bg-gray-900">
  <Button className="rounded-full" size="icon" variant="ghost">
    <PlusIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
    <span className="sr-only">Create new note</span>
  </Button>
  <div className="flex items-center gap-4">
    <Button className="rounded-full" size="icon" variant="ghost">
      <SearchIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      <span className="sr-only">Search notes</span>
    </Button>
    <Button className="rounded-full" size="icon" variant="ghost">
      <FilterIcon className="h-6 w-6 text-gray-500 dark:text-gray-400" />
      <span className="sr-only">Filter notes</span>
    </Button>
  </div>
</footer>
  );
}

function FilterIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    )
  }

function PlusIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }

  function SearchIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
  
