"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.print();
        }
      }}
    >
      Print / Save PDF
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z" /></svg>
    </button>
  );
}
